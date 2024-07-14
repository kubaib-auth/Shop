using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using Abp.Linq.Extensions;
using Abp.ObjectMapping;
using Castle.DynamicProxy.Generators.Emitters.SimpleAST;
using LessWebStore.Authorization.Users;
using LessWebStore.Categorys;
using LessWebStore.Categorys.Dtos;
using LessWebStore.Products.Dtos;
using LessWebStore.StudentCourseDTO;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LessWebStore.Products
{
    public class ProductAppServices:LessWebStoreAppServiceBase, IProductAppServices
    {
        private readonly IRepository<Product> _productRepository;
        private readonly IRepository<Category> _categoryRepository;
        private readonly IObjectMapper _objectMapper;
        public ProductAppServices(IRepository<Product> productrepository, IRepository<Category> categoryRepository, IObjectMapper objectMapper)
        {
            _productRepository = productrepository;
            _categoryRepository= categoryRepository;
            _objectMapper = objectMapper;
        }
        public async Task<PagedResultDto<GetProductForViewDto>> GetAll(GetAllProductInput input)
        {

            var filteredClientInvoices = _productRepository.GetAll()
            .Include(e => e.CategoryFk)
            .WhereIf(!string.IsNullOrWhiteSpace(input.Filter), e => false || e.ProductName.Trim().ToLower().Contains(input.Filter) || e.CategoryFk.CategoryName.Trim().ToLower().Contains(input.Filter))
            .WhereIf(!string.IsNullOrWhiteSpace(input.NameFilter), e => e.ProductName.Trim().ToLower() == input.NameFilter)
            .WhereIf(!string.IsNullOrWhiteSpace(input.CategoryNameFilter), e => e.CategoryFk != null && e.CategoryFk.CategoryName.Trim().ToLower() == input.CategoryNameFilter)
            .WhereIf(input.CategoryFilterId.HasValue, e => e.CategoryFk != null && e.CategoryFk.Id == input.CategoryFilterId);
                       
            var pagedAndFilteredClientInvoices = filteredClientInvoices
           .PageBy(input);

            var clientTimeSheets = from o in pagedAndFilteredClientInvoices
                                   join o1 in _categoryRepository.GetAll() on o.CategoryId equals o1.Id into j1
                                   from s1 in j1.DefaultIfEmpty()
                                   select new
                                   {

                                       o.ProductName,
                                       o.FullDescription,
                                       o.Description,
                                       o.ProductPrice,
                                       o.IsFeatured,                                      
                                       Id = o.Id,
                                       Name = s1 == null || s1.CategoryName == null ? "" : s1.CategoryName.ToString(),                                  
                                       CategoryId = s1.Id,                                      
                                   };

            var totalCount = await filteredClientInvoices.CountAsync();

            var dbList = await clientTimeSheets.ToListAsync();
            var results = new List<GetProductForViewDto>();

            foreach (var o in dbList)
            {
                var res = new GetProductForViewDto()
                {
                    Product = new ProductDto
                    {
                        ProductName = o.ProductName,
                        ProductPrice = o.ProductPrice,
                        Description = o.Description,
                        FullDescription= o.FullDescription,
                        IsFeatured = o.IsFeatured,                                              
                        Id = o.Id,
                        CategoryId = o.CategoryId

                    },
                    CategoryName = o.Name                 
                };

                results.Add(res);
            }

            return new PagedResultDto<GetProductForViewDto>(
                totalCount,
                results
            );

        }
        public async Task CreateOrEdit(ProductDto input)
        {
            if (input != null)
            {
                if (input.Id==null || input.Id==0)
                {
                    await Create(input);
                   
                }
                else
                {
                    await Update(input);
                }
            }
        }
        private async Task Create(ProductDto input)
        {
            
            var product = new Product()
            {
                ProductName = input.ProductName,
                ProductPrice = input.ProductPrice,
                Description = input.Description,
                FullDescription = input.FullDescription,
                IsFeatured=input.IsFeatured,
                CategoryId=input.CategoryId,
                Status= input.Status,
              
                
                
            };
       
            await _productRepository.InsertAsync(product);
        }

        private async Task Update(ProductDto input)
        {
            var existingProduct = await _productRepository.GetAsync(input.Id);
            if (existingProduct != null)
            {
                existingProduct.ProductName = input.ProductName;
                existingProduct.Description = input.Description;
                existingProduct.FullDescription = input.FullDescription;
                existingProduct.ProductPrice = input.ProductPrice;
                existingProduct.IsFeatured = input.IsFeatured;
                existingProduct.CategoryId = input.CategoryId;
                existingProduct.Status=input.Status;
                await _productRepository.UpdateAsync(existingProduct);
            }
            else
            {
                throw new Exception("There is no current user!");
               
            }
        }
        public async Task<List<ProductViewDto>> GetDashboardData()
        {
            var productList = await _productRepository.GetAllListAsync();
            var poductCount = productList.Count;
            var query = (
                from g in productList

                join c in _categoryRepository.GetAll() on g.CategoryId equals c.Id into j1
                from s1 in j1.DefaultIfEmpty()

                select new ProductViewDto
                {
                    ProductName = g.ProductName,
                    ProductPrice = g.ProductPrice,
                    Description = g.Description,
                    FullDescription = g.FullDescription,
                    CategoryId = s1?.Id,
                    Id = g.Id,
                    IsFeatured = g.IsFeatured,
                    CategoryName = s1?.CategoryName
                }
            ).ToList();

            return query;
        }
        public async Task<List<ProductCategoryCountDto>> GetCount()
        {
            var productCounts = await _productRepository.GetAll().GroupBy(p => p.CategoryId)
                .Select(g => new ProductCategoryCountDto
                {
                    CategoryId = g.Key,
                    CategoryName = g.First().CategoryFk.CategoryName,                 
                    ProductCount = g.Count(),
                    Products = g.ToList()
                }).OrderByDescending(p=>p.CategoryId).Take(10).ToListAsync();

            return productCounts;
        }
        public async Task<List<CategoryWiseProductDto>> CategoryWiseProduct(int categoryId)
        {
            var categoryProduct = await _productRepository.GetAll().Where(a => a.CategoryId == categoryId)
                .Select(x => new CategoryWiseProductDto
                {
                    Products = _productRepository.GetAll().Where(p => p.CategoryId == categoryId).ToList()
                }).ToListAsync();
              return categoryProduct;
        }
        public async Task<List<GetDiscountProductDtos>> CategoryWiseProductForTheme(int categoryId)
        {
            //int forgreebpeople = 10;
            var categoryProduct = await _productRepository.GetAll().Where(a => a.CategoryId == categoryId)
                .Select(x => new GetDiscountProductDtos
                {
                    Id=x.Id,
                    ProductName=x.ProductName,
                    ProductPrice = x.ProductPrice,
                    DiscountPrice = (int?)(x.ProductPrice - (x.ProductPrice * (10 / 100.0m)))


                }).ToListAsync();
            return categoryProduct;
        }
        public async Task<Product> GetByid(int id)
        {
            var pro= await _productRepository.FirstOrDefaultAsync(a => a.Id == id);
            return pro;
        }
        public async Task DeleteProduct(int id)
        {
            await _productRepository.DeleteAsync(id);
        }
       
        public async Task<Product> ProductDetail(int id)
        {
            var product = await _productRepository.GetAll().FirstOrDefaultAsync(p => p.Id == id);         
            return product;
        }


        public async Task<List<CartItemDto>> Cart(ProductDto input)
        {
            var cartItems = await _productRepository.GetAll()
                .Where(p => p.Id == input.Id)
                .Select(x => new CartItemDto()
                {
                    Id = x.Id,
                    ProductName = x.ProductName,
                    ProductPrice = x.ProductPrice,
                    Description = x.Description,
                    FullDescription = x.FullDescription,
                    IsFeatured = x.IsFeatured,
                    CategoryId = x.CategoryId,
                    //Quantity=x.q
                }).ToListAsync();

            return cartItems;
        }
    }
}

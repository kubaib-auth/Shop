using Abp.Application.Services.Dto;
using Abp.Collections.Extensions;
using Abp.Domain.Repositories;
using Abp.Linq.Extensions;
using LessWebStore.Authorization.Users;
using LessWebStore.Categorys.Dtos;
using LessWebStore.Products;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LessWebStore.Categorys
{
    public class CategoryAppServices: LessWebStoreAppServiceBase, ICategoryAppServices
    {
        private readonly IRepository<Category> _categoryRepository;
        private readonly IRepository<Product> _productRepository;
        private readonly IRepository<User, long> _lookup_userRepository;

        public CategoryAppServices(
            IRepository<Category> categoryRepository, 
            IRepository<Product> productrepository,
            IRepository<User, long> lookup_userRepository
            )
        {
            _categoryRepository = categoryRepository;
            _productRepository = productrepository;
            _lookup_userRepository = lookup_userRepository;
        }
        public async Task<PagedResultDto<GetCategoryForViewDto>> GetAll(CategoryViewInput input)
        {
            var filteredCategorys = _categoryRepository.GetAll()
                        .WhereIf(!string.IsNullOrWhiteSpace(input.Filter), e => false || e.CategoryName.Contains(input.Filter))
                        .WhereIf(!string.IsNullOrWhiteSpace(input.NameFilter), e => e.CategoryName.Contains(input.NameFilter));
            var pagedAndFilterCategory = filteredCategorys.PageBy(input);
            var caategorys = from o in pagedAndFilterCategory
                             join o1 in _lookup_userRepository.GetAll() on o.Id equals o1.Id into j1
                             from s1 in j1.DefaultIfEmpty()
                             select new
                             {
                                 o.CategoryName,                                
                                 o.Id,
                             };
            var totalCount = filteredCategorys.Count();
            var dbList = await caategorys.ToListAsync();
            var results = new List<GetCategoryForViewDto>();

            foreach (var o in dbList)
            {
                var res = new GetCategoryForViewDto()
                {
                    Category = new CategoryDto
                    {
                        CategoryName = o.CategoryName,                     
                        Id = o.Id,
                    },                   
                };
                results.Add(res);
            }
            return new PagedResultDto<GetCategoryForViewDto>(
                totalCount,
                results
            );
        }
        public async Task Create(CategoryDto model)
        {
            try
            {
                var productCategory = new Category()
                {
                    CategoryName = model.CategoryName,
                };
                await _categoryRepository.InsertAsync(productCategory);

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task Update(CategoryDto model)
        {
            var editcategory = await _categoryRepository.FirstOrDefaultAsync(a => a.Id == model.Id);
            editcategory.CategoryName = model.CategoryName;
           
            await _categoryRepository.UpdateAsync(editcategory);
        }
       
        public async Task<Category> GetByid(int id)
        {
            var categoryId = await _categoryRepository.FirstOrDefaultAsync(a => a.Id == id);
            return categoryId;
        }
        public async Task DeleteCategory(int id)
        {
            var existingCategory = await _productRepository.GetAll().Where(x => x.CategoryId == id).ToListAsync();
            if(existingCategory.Any())
            {
                throw new Exception("Cannot delete category because it has associated products.");

            }
            else
            {
                await _categoryRepository.DeleteAsync(id);
            }
        }
        public async Task<List<CategoryDropdownDto>> GetdropdownCategory()
        {
            var categoryOptionselected = await _categoryRepository.GetAll().Select(x=>new CategoryDropdownDto
            {
                Id = x.Id,
                CategoryName= x.CategoryName,

            }).ToListAsync();
            return categoryOptionselected;
        }
    }
}

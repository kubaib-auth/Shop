using Abp.Domain.Repositories;
using Abp.ObjectMapping;
using LessWebStore.Categorys;
using LessWebStore.Orders;
using LessWebStore.ProductOrderDetails.Dtos;
using LessWebStore.Products;
using LessWebStore.Products.Dtos;
using LessWebStore.StudentCourse;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LessWebStore.ProductOrderDetails
{
    public class OrderDetailAppService : LessWebStoreAppServiceBase, IOrderDetailAppService
    {
        private readonly IRepository<OrderDetail> _orderDetailsrepository;
        private readonly IRepository<Order> _orderRepository;
        private readonly IRepository<Category> _categoryRepository;
        private readonly IObjectMapper _objectMapper;
        public OrderDetailAppService(IRepository<OrderDetail> orderDetailsrepository, IRepository<Order> orderepository, IRepository<Category> categoryRepository, IObjectMapper objectMapper)
        {
            _orderDetailsrepository = orderDetailsrepository;
            _orderRepository = orderepository;
            _categoryRepository = categoryRepository;
            _objectMapper = objectMapper;
        }       
        public async Task AddCart(OrderDetailDto []input)
        {
            foreach (var item in input)
            {
                var course = new OrderDetail()
                {
                    ProductId = item.Id,
                    ProductPrice = item.ProductPrice,
                    ProductQty = item.Quantity,
                    ProductAmount= item.ProductPrice * item.Quantity,
                    UserId= (int?)AbpSession.UserId,
                };
                await _orderDetailsrepository.InsertAsync(course);
            }          
        }

    }
}

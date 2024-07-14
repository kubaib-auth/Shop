using Abp.Domain.Repositories;
using Abp.Runtime.Session;
using LessWebStore.Authorization.Users;
using LessWebStore.Orders;
using LessWebStore.ProductOrder.Dtos;
using LessWebStore.ProductOrderDetails;
using LessWebStore.ProductOrderDetails.Dtos;
using LessWebStore.Products;
using LessWebStore.Products.Dtos;
using LessWebStore.StudentCourse;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Threading.Tasks;
namespace LessWebStore.ProductOrder
{
    public class OrderAppService: LessWebStoreAppServiceBase, IOrderAppService
    {
        private readonly IRepository<Order> _orderRepository;
        private readonly IRepository<OrderDetail> _orderDetailsrepository;
        private readonly IRepository<Product> _productRepository;
        private readonly UserManager _userManager;

        private readonly IAbpSession _abpSession;

        public OrderAppService(IRepository<Order> orderRepository, UserManager userManager, IRepository<User, long> repository, IAbpSession abpSession, IRepository<Product> productrepository, IRepository<OrderDetail> orderDetailsrepository)
        {
            _orderRepository = orderRepository;
            _orderDetailsrepository = orderDetailsrepository;
            _productRepository = productrepository;
            _userManager = userManager;

            _abpSession = abpSession;
        }
       
        public async Task Order(OrderDto input, int user, int totalProductAmount)
        {
            int orderCount = await _orderRepository.CountAsync(o => o.UserId == user);
            int newOrderStatus = orderCount + 1;
          //  double rndNumber = new Random().NextDouble();
          //  string testNumber = "#" + (rndNumber * 99999999).ToString("0000");
            string orderNumber = GenerateOrderNumber();
            var order = new Order()
            {
                OrderDate = input.OrderDate,
                OrderProductName = input.OrderProductName,
                OrderProductPhone = input.OrderProductPhone,
                OrderProductAddress = input.OrderProductAddress,
                OrderProductShipmentAddress = input.OrderProductShipmentAddress,
                OrderAmount = totalProductAmount,
                OrderShipmentName = input.OrderShipmentName,
                OrderShipmentPhone = input.OrderShipmentPhone,
                OrderNumber = orderNumber,
                City = input.City,
                State = input.State,
                Email = input.Email,
                OrderStatus = newOrderStatus,
                UserId = user
            };
            var orderId = await _orderRepository.InsertAndGetIdAsync(order);
            var orderDetails = await _orderDetailsrepository.GetAllListAsync(od => od.UserId == user);
            foreach (var orderDetail in orderDetails)
            {
                if(orderDetail.OrderId == null)
                {
                    orderDetail.UpdateOrderId(orderId);
                }
            }           
        }
        private int GenerateRandomNumber()
        {
            return new Random().Next(100, 1000);
        }
        private string GenerateOrderNumber()
        {
            int randomNumberFirst = GenerateRandomNumber();
            int randomNumberSecond = new Random().Next(10, 100);
            return $"{randomNumberFirst}DES{randomNumberSecond}";
        }

        public async Task<List<OrderSlipDto>> GenerateOrderSlip()
        {
            var orderUserName = await _userManager.Users.Where(x=>x.Id==AbpSession.UserId).FirstOrDefaultAsync();
            var latestBookOrderByUser = await _orderDetailsrepository
                .GetAll()
                .Where(od => od.OrderFk.UserId == AbpSession.UserId)
                .GroupBy(od => od.OrderId)
                .Select(g => new OrderSlipDto
                {
                    OrderId = g.Key,
                    OrderDate = g.First().OrderFk.OrderDate,
                    OrderProductAddress = g.First().OrderFk.OrderProductAddress,
                    OrderProductPhone = g.First().OrderFk.OrderProductPhone,
                    Email = g.First().OrderFk.Email,
                    OrderAmount = g.First().OrderFk.OrderAmount,
                    OrderNumber = g.First().OrderFk.OrderNumber,
                    UserName = orderUserName.Name,
                    OrderDetailSlip = g.Select(od => new OrderDetailDto
                    {
                        ProductPrice = od.ProductPrice,
                        Quantity=od.ProductQty,
                       // ProductQty = od.ProductQty,
                        ProductAmount = od.ProductAmount,
                        ProductId = od.ProductId,
                        ProductName=od.ProductFK.ProductName,
                    }).ToList()
                })
                .OrderByDescending(p => p.OrderId)
                .Take(1)
                .ToListAsync();

            return latestBookOrderByUser;
        }
        

        public async Task<int?> CurrentUser()
        {
            var tenemt = AbpSession.GetTenantId();
            var user = _abpSession.UserId;
            return (int?)user;
        }
    }
}

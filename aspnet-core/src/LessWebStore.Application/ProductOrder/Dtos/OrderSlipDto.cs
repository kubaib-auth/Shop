using Abp.Domain.Entities;
using LessWebStore.Orders;
using LessWebStore.ProductOrderDetails;
using LessWebStore.ProductOrderDetails.Dtos;
using LessWebStore.Products;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LessWebStore.ProductOrder.Dtos
{
    public class OrderSlipDto:Entity<int>
    {
        public List<OrderDetailDto> OrderDetailSlip { get; set; }
        // public OrderDto OrderSlip { get; set; }
        public int? OrderId { get; set; }
        public DateTime? OrderDate { get; set; }
        public string OrderProductName { get; set; }
        public string OrderProductPhone { get; set; }
        public string OrderProductAddress { get; set; }
        public string OrderProductShipmentAddress { get; set; }
        public string OrderNumber { get; set; }

        public string Email { get; set; }
        public decimal? OrderAmount { get; set; }
        public string UserName { get; set; }


    }
}

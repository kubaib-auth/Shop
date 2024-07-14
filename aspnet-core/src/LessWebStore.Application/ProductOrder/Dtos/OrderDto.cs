using Abp.Domain.Entities;
using LessWebStore.ProductOrderDetails;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LessWebStore.ProductOrder.Dtos
{
    public class OrderDto:Entity<int>
    {
        public DateTime? OrderDate { get; set; }
        public string OrderProductName { get; set; }
        public string OrderProductPhone { get; set; }
        public string OrderProductAddress { get; set; }
        public string OrderProductShipmentAddress { get; set; }
        public string Email { get; set; }
        public decimal? OrderAmount { get; set; }
        public int OrderStatus { get; set; }
        public string OrderShipmentPhone { get; set; }
        public string OrderShipmentName { get; set; }
        public string OrderNumber { get; set; }
        public int? OrderDetailId { get; set; }
        [ForeignKey("OrderDetailId")]
        public virtual OrderDetail OrderDetailFk { get; set; }
        public int? UserId { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string ShipmentCity { get; set; }

        // Navigation property for related order details
        // public virtual ICollection<OrderDetail> OrderDetails { get; set; }
    }
}

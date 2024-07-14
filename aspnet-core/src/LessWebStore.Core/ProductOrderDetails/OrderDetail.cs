using Abp.Domain.Entities;
using LessWebStore.Orders;
using LessWebStore.Products;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LessWebStore.ProductOrderDetails
{
    public class OrderDetail: Entity<int>
    {
      
        public decimal? ProductPrice { get; set; }
        public int? ProductQty { get; set; }
        public decimal? ProductAmount { get; set; }
        public int? ProductId { get; set; }
        [ForeignKey("ProductId")]
        public virtual Product ProductFK { get; set; }
        public int? UserId { get; set; }
        public int? OrderId { get; set; }
        [ForeignKey("OrderId")]
        public virtual Order OrderFk { get; set; }      
        public void UpdateOrderId(int orderId)
        {
            this.OrderId = orderId;
        }
        //public void UpdateOrderStatus(int orderstatus)
        //{
        //    this.OrderStatus = orderstatus;
        //}
    }
}

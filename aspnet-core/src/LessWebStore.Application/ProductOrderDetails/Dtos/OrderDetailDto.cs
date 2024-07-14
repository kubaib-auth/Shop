using Abp.Domain.Entities;
using LessWebStore.Orders;
using LessWebStore.Products;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LessWebStore.ProductOrderDetails.Dtos
{
    public class OrderDetailDto: Entity<int>
    {

        public decimal? ProductPrice { get; set; }
        public int? Quantity { get; set; }
        public decimal? ProductAmount { get; set; }
        public int? ProductId { get; set; }
        [ForeignKey("ProductId")]
        public virtual Product ProductFK { get; set; }
        //public int? OrderID { get; set; }
        //[ForeignKey("OrderID")]
        public virtual Order OrderFk { get; set; }
        public int? UserId { get; set; }
        public string ProductName { get; set; }
    }
}

using Abp.Domain.Entities;
using LessWebStore.Categorys;
using LessWebStore.ProductOrderDetails;
using LessWebStore.Products.Enum;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace LessWebStore.Products
{
    public class Product:Entity<int>
    {
       
        public string ProductName { get; set; }
        public decimal? ProductPrice { get; set; }
        public string Description { get; set; }       
        public string FullDescription { get; set; }
        public Guid Image { get; set; }
        public bool? IsFeatured { get; set; }
        public int? CategoryId { get; set; }
        [ForeignKey("CategoryId")]
        public virtual Category CategoryFk { get; set; }
        public virtual ICollection<OrderDetail> OrderDetails { get; set; }
        public int? Quantity { get; set; }
        public  EnumSizeType Status { get; set; }
    }
            
}


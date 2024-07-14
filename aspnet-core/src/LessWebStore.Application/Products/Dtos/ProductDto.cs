using Abp.AutoMapper;
using Abp.Domain.Entities;
using LessWebStore.Authorization.Users;
using LessWebStore.Categorys;
using LessWebStore.ProductOrderDetails;
using LessWebStore.ProductOrderDetails.Dtos;
using LessWebStore.Products.Enum;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LessWebStore.Products.Dtos
{
    [AutoMapFrom(typeof(Product))]
    public  class  ProductDto : Entity<int>
    {
        public string ProductName { get; set; }
        public decimal? ProductPrice { get; set; }
        public string Description { get; set; }
        public string FullDescription { get; set; }
        public Guid Image { get; set; }
        public bool? IsFeatured { get; set; }
        public int? CategoryId { get; set; }
       // [ForeignKey("CategoryId")]
        public virtual Category CategoryFk { get; set; }
        public virtual ICollection<OrderDetail> OrderDetails { get; set; }
        public int? Quantity { get; set; }
        public EnumSizeType Status { get; set; }
    }
}

using Abp.Domain.Entities;
using LessWebStore.Categorys;
using LessWebStore.ProductOrderDetails;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LessWebStore.Products.Dtos
{
    public class GetDiscountProductDtos : Entity<int>
    {
        public string ProductName { get; set; }
        public decimal? ProductPrice { get; set; }
        public int? DiscountPrice { get; set; }
    }
}

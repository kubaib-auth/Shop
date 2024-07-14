using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LessWebStore.Products.Dtos
{
    public class ProductCategoryCountDto:Entity<int>
    {
        public int? CategoryId { get; set; }
        public string CategoryName { get; set; }
        public int? ProductCount { get; set; }
        public List<Product> Products { get; set; }

    }
}

using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LessWebStore.Products.Dtos
{
    public class ProductViewDto: Entity<int>
    {
        public string ProductName { get; set; }
        public decimal? ProductPrice { get; set; }
        public string Description { get; set; }
        public string FullDescription { get; set; }
      //  public Guid ImageProduct { get; set; }
        public bool? IsFeatured { get; set; }
        public int? CategoryId { get; set; }
        public string CategoryName { get; set; }
        //public Guid ImageCategory { get; set; }
    }
}

using Abp.Domain.Entities;
using LessWebStore.Products;
using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LessWebStore.Categorys
{
    public class Category:Entity<int>
    {
       
        public string CategoryName { get; set; }
        public string Image { get; set; }

        public virtual ICollection<Product> Products { get; set; }
    }
}

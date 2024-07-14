using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LessWebStore.Products.Dtos
{
    public class CategoryWiseProductDto
    {
         public virtual ICollection<Product> Products { get; set; }

    }
}

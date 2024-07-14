using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LessWebStore.Products.Dtos
{
    public class GetProductForViewDto
    {
        public ProductDto Product { get; set; }
        public string CategoryName { get; set; }
    }
}

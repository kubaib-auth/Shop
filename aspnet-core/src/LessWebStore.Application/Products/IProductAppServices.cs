using LessWebStore.Products.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LessWebStore.Products
{
    public interface IProductAppServices
    {
        Task<Product> ProductDetail(int id);
    }
}

using LessWebStore.Books;
using LessWebStore.BookService.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LessWebStore.BookService
{
    public interface IBookAppService
    {
        Task Create(BookDto input);
        Task Update(BookDto input);
        Task<Book> GetByid(int id);
        Task Delete(int id);
    }
}

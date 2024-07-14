using Abp.Domain.Repositories;
using LessWebStore.Books;
using LessWebStore.BookService.Dtos;
using LessWebStore.StudentCourse;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LessWebStore.BookService
{
    public class BookAppService:LessWebStoreAppServiceBase, IBookAppService
    {
        private readonly IRepository<Book> _bookRepository;
        public BookAppService(IRepository<Book> bookRepository)
        {
            _bookRepository=bookRepository;
        }

        public async Task Create(BookDto input)
        {
            try
            {
                 var booklist=new Book()
                 {
                     BookName = input.BookName,
                     AuthorName = input.AuthorName,
                     PublishYear = input.PublishYear,
                 };
                await _bookRepository.InsertAsync(booklist);
            }
            catch (Exception ex)
            {
                throw (ex);
            }
        }
        public async Task Update(BookDto input)
        {
            try
            {
                var book = await _bookRepository.FirstOrDefaultAsync(x=>x.Id==input.Id);
                    book.Id = input.Id;
                    book.BookName = input.BookName;
                    book.AuthorName = input.AuthorName;
                    book.PublishYear = input.PublishYear;
                    await _bookRepository.UpdateAsync(book);
            }
            catch (Exception ex)
            {
                throw (ex);
            }
        }
        public async Task<List<Book>> getAll()
        {
            try
            {
              var datalist= await _bookRepository.GetAll().ToListAsync();
              return datalist;
               
            }
            catch (Exception ex)
            {
                throw (ex);
            }
        }
        public async Task<Book> GetByid(int id)
        {
            try
            {
                var bookid = await _bookRepository.FirstOrDefaultAsync(x => x.Id == id);
                return bookid;
            }
            catch (Exception ex)
            {
                throw (ex);
            }
        }
        public async Task Delete(int id)
        {
            await _bookRepository.DeleteAsync(id);
        }
    }
}

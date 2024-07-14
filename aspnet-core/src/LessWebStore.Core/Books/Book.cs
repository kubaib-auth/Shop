using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LessWebStore.Books
{
    public class Book:Entity<int>
    {
        public string BookName { get; set; }
        public string AuthorName { get; set; }
        public string PublishYear { get; set; }
       
    }
}

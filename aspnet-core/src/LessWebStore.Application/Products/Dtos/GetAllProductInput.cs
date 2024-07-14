using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LessWebStore.Products.Dtos
{
    public class GetAllProductInput:PagedAndSortedResultRequestDto
    {
        public string Filter { get; set; }
        public string NameFilter { get; set; }
        public string CategoryNameFilter { get; set; }
        public long? CategoryFilterId { get; set; }
    }
}

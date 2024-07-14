using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LessWebStore.Categorys.Dtos
{
    public class CategoryViewInput:PagedAndSortedResultRequestDto
    {
        public string Filter { get; set; }
        public string NameFilter { get; set; }
    }
}

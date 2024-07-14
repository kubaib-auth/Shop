using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LessWebStore.StudentCourseDTO
{
    public class StudenttCourseViewDto:Entity<int>
    {
        public string FullName { get; set; }
        public string FirstName { get; set; }
        public string SurName { get; set; }
        public int RollNo { get; set; }
        public string CourseName { get; set; }
        public string CourseCode { get; set; }
        public string CourseDescription { get; set; }
        public int StudentId { get; set; }
        public int CourseId { get; set; }
    }
}

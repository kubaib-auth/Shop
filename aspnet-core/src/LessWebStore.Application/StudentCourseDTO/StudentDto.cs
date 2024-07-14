using Abp.Domain.Entities;
using LessWebStore.StudentCourse;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LessWebStore.StudentCourseDTO
{
    public class StudentDto : Entity<int>
    {
        public string FullName { get; set; }
        public string FirstName { get; set; }
        public string SurName { get; set; }
        public int RollNo { get; set; }
        //Relationships
        public ICollection<StudenttCourse> StudenttCourses { get; set; }
    }
}

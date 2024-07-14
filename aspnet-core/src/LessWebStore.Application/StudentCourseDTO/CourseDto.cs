using Abp.Domain.Entities;
using LessWebStore.StudentCourse;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LessWebStore.StudentCourseDTO
{
    public class CourseDto:Entity<int>
    {
        public string CourseName { get; set; }
        public string CourseCode { get; set; }
        public string CourseDescription { get; set; }

        //Relationships
        public ICollection<StudenttCourse> StudenttCourses { get; set; }
    }
}

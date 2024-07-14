using Abp.Domain.Entities;
using LessWebStore.StudentCourse;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LessWebStore.StudentCourseDTO
{
    public class StudenttCourseDto : Entity<int>
    {

        public int StudentId { get; set; }
        public int CourseId { get; set; }

        //Relationships
       // public Student Student { get; set; }
       // public Course Course { get; set; }
    }
}

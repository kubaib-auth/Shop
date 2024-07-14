using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LessWebStore.StudentCourse
{
    public class Student:Entity<int>
    {
        public string FullName { get; set; }
        public string FirstName { get; set; }
        public string SurName { get; set; }
        public int RollNo { get; set; }

        //Relationships
        public ICollection<StudenttCourse> StudenttCourses { get; set; }

    }
}

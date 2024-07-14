using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LessWebStore.StudentCourse
{
    public class StudenttCourse:Entity<int>
    {
        public int StudentId { get; set; }
        //Relationships
        [ForeignKey(nameof(StudentId))]
        public Student Student { get; set; }
        public int CourseId { get; set; }

        [ForeignKey(nameof(CourseId))]
        public Course Course { get; set; }

    }
}

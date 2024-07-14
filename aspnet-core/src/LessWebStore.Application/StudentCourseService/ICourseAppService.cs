using LessWebStore.StudentCourseDTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LessWebStore.StudentCourseService
{
    public interface ICourseAppService
    {
        Task CreateCourse(CourseDto input);
    }
}

using LessWebStore.StudentCourseDTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LessWebStore.StudentCourseService
{
    public interface IStudentCourseAppService
    {
        Task Create(StudenttCourseDto input);
        Task Update(StudenttCourseDto input);
        Task DeleteStudentCourse(int id);
        Task<List<StudenttCourseViewDto>> GetAll();
    }
}

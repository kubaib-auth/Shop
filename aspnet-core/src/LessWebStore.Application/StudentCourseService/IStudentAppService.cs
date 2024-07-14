using LessWebStore.StudentCourse;
using LessWebStore.StudentCourseDTO;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LessWebStore.StudentCourseService
{
    public interface IStudentAppService
    {
        Task CreateStudent(StudentDto input);
        Task UpdateStudent(StudentDto input);
        Task DeleteStudent(int id);
        Task<List<Student>> GetAll();
    }
}

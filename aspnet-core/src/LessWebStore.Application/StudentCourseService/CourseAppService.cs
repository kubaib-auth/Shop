using Abp.Domain.Repositories;
using LessWebStore.StudentCourse;
using LessWebStore.StudentCourseDTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LessWebStore.StudentCourseService
{
    public class CourseAppService : LessWebStoreAppServiceBase, ICourseAppService
    {
        private readonly IRepository<Course> _courseRepository;
    
      public CourseAppService(IRepository<Course> courseRepository)
      {
        _courseRepository = courseRepository;
      }
        public async Task CreateCourse(CourseDto input)
        {
            try
            {
                var coursedata = new Course()
                {
                    Id = input.Id,
                    CourseName = input.CourseName,
                    CourseCode = input.CourseCode,
                    CourseDescription = input.CourseDescription,
                };
                await _courseRepository.InsertAsync(coursedata);
            }
            catch (Exception ex)
            {
                throw (ex);
            }
        }
        public async Task UpdateCourse(CourseDto input)
        {
            try
            {
                var course = await _courseRepository.FirstOrDefaultAsync(x => x.Id == input.Id);
                course.Id = input.Id;
                course.CourseName = input.CourseName;
                course.CourseCode = input.CourseCode;
                course.CourseDescription = input.CourseDescription;
                await _courseRepository.UpdateAsync(course);
            }
            catch(Exception ex)
            {
                 throw(ex);
            }
        }
         
        public async Task DeleteCourse(int id)
        {
            await _courseRepository.DeleteAsync(id);
        }

        public async Task <List<Course>>  GetAll()
        {
            return await _courseRepository.GetAllListAsync();
        }
        public async Task<Course> GetById(int id)
        {
            var datalist = await _courseRepository.FirstOrDefaultAsync(a => a.Id == id);
            return datalist;
        }
    }
}

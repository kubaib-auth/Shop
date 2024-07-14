using Abp.Application.Services.Dto;
using Abp.Collections.Extensions;
using Abp.Domain.Repositories;
using LessWebStore.Authorization.Users;
using LessWebStore.Roles.Dto;
using LessWebStore.StudentCourse;
using LessWebStore.StudentCourseDTO;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LessWebStore.StudentCourseService
{
    public class StudentCourseAppService: LessWebStoreAppServiceBase, IStudentCourseAppService
    {
        private readonly IRepository<StudenttCourse> _studentCourseRepository;
        private readonly IRepository<Student> _studentRepository;
        private readonly IRepository<Course> _courseRepository;
        public StudentCourseAppService(IRepository<StudenttCourse> studentCourseRepository, IRepository<Student> studentRepository, IRepository<Course> courseRepository)
        {
            _studentCourseRepository= studentCourseRepository;
            _studentRepository = studentRepository;
            _courseRepository= courseRepository;
        }

        public async Task Create(StudenttCourseDto input)
        {
            try
            {
                var studentcourse = new StudenttCourse()
                {
                    Id = input.Id,
                    CourseId = input.CourseId,
                    StudentId = input.StudentId,
                };
                await _studentCourseRepository.InsertAsync(studentcourse);
            }
            catch (Exception ex)
            {
                throw(ex);
            }
           
        }
        public async Task Update(StudenttCourseDto input)
        {
            try
            {
                var dataID = await _studentCourseRepository.FirstOrDefaultAsync(x => x.Id == input.Id);
                dataID.Id = input.Id;
                dataID.StudentId = input.StudentId;
                dataID.CourseId = input.CourseId;
                await _studentCourseRepository.UpdateAsync(dataID);
            }
            catch (Exception ex)
            {
                throw (ex);
            }
        }
        public async Task DeleteStudentCourse(int id)
        {
            try
            {
              
                await _studentCourseRepository.DeleteAsync(id);
            }
            catch (Exception ex)
            {
                throw (ex);
            }
            
        }     
        public async Task<List<StudenttCourseViewDto>> GetAll()
        {
            
            var datalist = await (from alldata in _studentCourseRepository.GetAll()

                       join stud in _studentRepository.GetAll() on alldata.StudentId equals stud.Id into j1
                       from s1 in j1.DefaultIfEmpty()

                       join cour in _courseRepository.GetAll() on alldata.CourseId equals cour.Id into j2
                       from s2 in j2.DefaultIfEmpty()
                       select new StudenttCourseViewDto
                       {
                          
                          FullName =  s1.FullName,
                          RollNo= s1.RollNo,
                          CourseName= s2.CourseName,
                          CourseCode = s2.CourseCode,
                          CourseDescription= s2.CourseDescription,
                          CourseId=s2.Id,
                          StudentId=s1.Id
                       }).ToListAsync();
            return datalist;
           
        }
    }
}

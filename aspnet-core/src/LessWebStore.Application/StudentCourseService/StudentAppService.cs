using Abp.Domain.Repositories;
using LessWebStore.StudentCourse;
using LessWebStore.StudentCourseDTO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Text;
using System.Threading.Tasks;

namespace LessWebStore.StudentCourseService
{
    public class StudentAppService : LessWebStoreAppServiceBase, IStudentAppService
    {
        private readonly IRepository<Student> _studentRepository;
     
       
        public StudentAppService(IRepository<Student> studentRepository)
        {
            _studentRepository = studentRepository;
        }

        

       
        public async Task CreateStudent(StudentDto input)
        {
            
            try
            {
                var studentdata=new Student()
                {
                    Id = input.Id,
                    FirstName = input.FirstName,
                    FullName = input.FullName,
                    SurName = input.SurName,
                    RollNo = input.RollNo,
                };
                await _studentRepository.InsertAsync(studentdata);
              
            }
            catch (Exception ex)
            {
                throw (ex); 
            }
        }
        public async Task UpdateStudent(StudentDto input)
        {

            try
            {
               var student= await _studentRepository.FirstOrDefaultAsync(x=>x.Id==input.Id);
                student.Id = input.Id;
                student.FirstName=input.FirstName;
                student.FullName=input.FullName;
                student.SurName=input.SurName;
                student.RollNo=input.RollNo;
                await _studentRepository.UpdateAsync(student);
            }
            catch (Exception ex)
            {
                throw (ex);
            }
        }
        public async Task DeleteStudent(int id)
        {
          
            try
            {
              await _studentRepository.DeleteAsync(id);
            }
            catch (Exception ex)
            {
                throw (ex);
            }
        }
        public async Task <List<Student>> GetAll()
        {
            var datalist = await _studentRepository.GetAll().ToListAsync();
            return datalist;
        }
        public async Task<Student> GetById(int id)
        {
            var datalist = await _studentRepository.FirstOrDefaultAsync(a=> a.Id == id);
            return datalist;
        }
    }
}

import { Component, OnInit } from '@angular/core';
import { StudentServiceProxy,CourseServiceProxy, StudentCourseServiceProxy } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-studentcourse-list',
  templateUrl: './studentcourse-list.component.html',
  styleUrls: ['./studentcourse-list.component.css']
})
export class StudentcourseListComponent implements OnInit {
  StudentCourseList=[];
  
  constructor(private service:StudentCourseServiceProxy,
    private servicestudent:StudentServiceProxy,private courseService:CourseServiceProxy)
  {

  }
  ngOnInit() {
    this.getAllStudentCourse();
  }
  
  getAllStudentCourse(){
    this.service.getAll().subscribe(StudentCourseList=>{
      this.StudentCourseList = StudentCourseList;
    })
  }
}

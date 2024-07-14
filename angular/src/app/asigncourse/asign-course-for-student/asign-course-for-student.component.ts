import { Component, OnInit } from '@angular/core';
import {Student,Course, StudentServiceProxy,CourseServiceProxy, StudentCourseServiceProxy, StudenttCourse } from '@shared/service-proxies/service-proxies';
import { result } from 'lodash-es';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-asign-course-for-student',
  templateUrl: './asign-course-for-student.component.html',
  styleUrls: ['./asign-course-for-student.component.css']
})
export class AsignCourseForStudentComponent implements OnInit {
  
  StudentList:any;
  SelectedValue:any;
  nameSelect: string = '';
  ChangeStudent(e){
    console.log(e.target.value)
    this.SelectedValue= e.target.value ;
  }
  constructor(
    private service:StudentCourseServiceProxy,
    private servicestudent:StudentServiceProxy,
    private courseService:CourseServiceProxy,
    private router:ActivatedRoute,
    private route : Router
    )
  {

  } 

  ngOnInit():void{
    this.SelectedValue = undefined;
    this.servicestudent.getAll().subscribe((data:any)=>{
      debugger;
      this.StudentList=data;
      //this.CourseList=data;
    })
  }


  // SubmitFormData(data:any){
  //   this.service.create(data).subscribe((result)=>{
  //     //this.router.navigate(['app/courses'])
  //     console.log(result);
  //  })
  // }



}

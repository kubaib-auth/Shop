import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Course, CourseServiceProxy } from '@shared/service-proxies/service-proxies';
@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit{

id:any;
data:any;
course = new Course();

constructor(private service:CourseServiceProxy,private router:ActivatedRoute ,private route : Router)
 {

 }
 ngOnInit(): void {
   console.log(this.router.snapshot.params.id);
   this.id=this.router.snapshot.params.id;
   this.getData();
 }
 getData()
 {
  this.service.getById(this.id).subscribe(res=>{
    this.data=res;
    this.course=this.data;
  });
 }
 updateCourseon()
 {
  this.service.updateCourse(this.course).subscribe(res=>{
  this.route.navigate(['/app/courses'])
  })
 }
}

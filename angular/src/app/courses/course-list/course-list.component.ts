import { Component } from '@angular/core';
import { Course, CourseServiceProxy } from '@shared/service-proxies/service-proxies';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
CourseList=[]
AllCourse = Observable<Course>
constructor(private service:CourseServiceProxy){

}

ngOnInit() {
  this.getAllCourse();
}

getAllCourse(){
  this.service.getAll().subscribe(CourseList=>{
    this.CourseList=CourseList;
  })
}

CoursesDelete(id:any){
  this.service.deleteCourse(id).subscribe(res=>{
    this.getAllCourse();
  })
}



}

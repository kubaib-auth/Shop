import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CourseServiceProxy } from '@shared/service-proxies/service-proxies';
@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent {
  
constructor(private service:CourseServiceProxy,private router:Router)
{

}

SubmitFormData(data:any)
{
   this.service.createCourse(data).subscribe((result)=>{
      this.router.navigate(['app/courses'])
      console.log(result);
   })
}


}

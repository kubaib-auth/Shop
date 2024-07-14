import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup}   from '@angular/forms';
import { Student, StudentDto, StudentServiceProxy } from '@shared/service-proxies/service-proxies';
import { result } from 'lodash-es';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit{


  id:any;
  data:any;
  student = new Student();
  
  constructor(
    private service:StudentServiceProxy,
    private router : ActivatedRoute,
    private route:Router) 
  {
   
  }
ngOnInit(): void {
  console.log(this.router.snapshot.params.id);
    this.id = this.router.snapshot.params.id;
    this.getData();
  }
  getData(){
    this.service.getById(this.id).subscribe(res => {
      this.data = res;
      this.student  = this.data;
    });
  }
  updateStudenton(){
    
    this.service.updateStudent(this.student).subscribe(res => {
      this.route.navigate(['/app/students'])
    })
  }

 


}

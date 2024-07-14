import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {StudentServiceProxy } from '@shared/service-proxies/service-proxies';

import { result } from 'lodash-es';
@Component({
  selector: 'app-create-studentt',
  templateUrl: './create-studentt.component.html',
  styleUrls: ['./create-studentt.component.css']
})
export class CreateStudenttComponent {
  
  constructor(private service:StudentServiceProxy,private router : Router) 
  {
   
  }
 
SubmitFormData(data:any)
{
  
  this.service.createStudent(data).subscribe((result)=>{
    this.router.navigate(['/app/students'])
    console.warn(result);
  })
}


}

import { Component } from '@angular/core';
import { Student, StudentServiceProxy } from '@shared/service-proxies/service-proxies';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent {

  allstudent: Observable<Student[]>;

  data = []
  constructor(private service: StudentServiceProxy) {
  }
  ngOnInit() {
    this.getAllStudent();
  }
  getAllStudent() {
    this.service.getAll().subscribe(data => {
      this.data = data;
    })
  }

  StudDelete(id: any) {
    this.service.deleteStudent(id).subscribe(res => {
      this.getAllStudent();
    })
  }
}




import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignCourseForStudentComponent } from './asign-course-for-student.component';

describe('AsignCourseForStudentComponent', () => {
  let component: AsignCourseForStudentComponent;
  let fixture: ComponentFixture<AsignCourseForStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignCourseForStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignCourseForStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

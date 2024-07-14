import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentcourseListComponent } from './studentcourse-list.component';

describe('StudentcourseListComponent', () => {
  let component: StudentcourseListComponent;
  let fixture: ComponentFixture<StudentcourseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentcourseListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentcourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

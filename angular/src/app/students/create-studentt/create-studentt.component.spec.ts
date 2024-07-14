import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudenttComponent } from './create-studentt.component';

describe('CreateStudenttComponent', () => {
  let component: CreateStudenttComponent;
  let fixture: ComponentFixture<CreateStudenttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStudenttComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStudenttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

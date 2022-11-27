import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentsComponent } from './add-students.component';

describe('AddStudentsComponent', () => {
  let component: AddStudentsComponent;
  let fixture: ComponentFixture<AddStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiStudentService } from '../api-student.service';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css'],
})
export class AddStudentsComponent {
  id = -1;
  btnName = 'Add Student';
  constructor(
    private ___api: ApiStudentService,
    private __router: Router,
    private __actRou: ActivatedRoute
  ) {}
  myForm = new FormGroup({
    name: new FormControl(''),
    avatar: new FormControl(''),
    department: new FormControl(''),
    roll_no: new FormControl(''),
    city: new FormControl(''),
    password: new FormControl(''),
    username: new FormControl(''),
  });

  ngOnInit() {
    if (this.__actRou.snapshot.params['id'] != null) {
      this.id = this.__actRou.snapshot.params['id'];
      this.btnName = 'Edit Student';
      this.___api.getStudentById(this.id).subscribe((res: any) => {
        this.myForm.controls.avatar.setValue(res.avatar);
        this.myForm.controls.name.setValue(res.name);
        this.myForm.controls.city.setValue(res.city);
        this.myForm.controls.username.setValue(res.username);
        this.myForm.controls.password.setValue(res.password);
        this.myForm.controls.department.setValue(res.department);
        this.myForm.controls.roll_no.setValue(res.roll_no);
      });
    }
  }

  insert() {
    if (this.id > 0) {
      this.___api.update(this.id, this.myForm.value).subscribe((res: any) => {
        this.__router.navigate(['/students']);
      });
    } else {
      this.___api.insert(this.myForm.value).subscribe((res: any) => {
        this.__router.navigate(['/students']);
      });
    }
  }
}

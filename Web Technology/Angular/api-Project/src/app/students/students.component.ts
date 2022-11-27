import { Component } from '@angular/core';
import { ApiStudentService } from '../api-student.service';
import { Student } from '../student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  data: Student[] = [];
  constructor(private __api: ApiStudentService) {}

  ngOnInit() {
    this.__api.getAllStudent().subscribe((res: any) => {
      this.data = res;
    });
  }
  delete(id: any) {
    this.__api.deleteStudentById(id).subscribe((res) => {
      this.ngOnInit();
    });
  }
}

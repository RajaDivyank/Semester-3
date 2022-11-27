import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiStudentService } from '../api-student.service';
import { Student } from '../student';

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.css'],
})
export class DetailStudentComponent {
  id = 0;
  data: Student = new Student();
  constructor(
    private __actRoute: ActivatedRoute,
    private __api: ApiStudentService,
    private __route: Router
  ) {}
  ngOnInit() {
    this.id = this.__actRoute.snapshot.params['id'];
    this.__api.getStudentById(this.id).subscribe((res: any) => {
      this.data = res;
    });
  }

  delete() {
    this.__api.deleteStudentById(this.id).subscribe((res) => {
      this.__route.navigate(['/students']);
    });
  }
}

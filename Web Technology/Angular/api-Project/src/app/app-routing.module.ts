import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentsComponent } from './add-students/add-students.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'students/add', component: AddStudentsComponent },
  { path: 'students/:id', component: DetailStudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

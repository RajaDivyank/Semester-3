import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExpriencesComponent } from './expriences/expriences.component';

import { FacultyComponent } from './faculty/faculty.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ResultComponent } from './result/result.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'result', component: ResultComponent },
  { path: 'product', component: ProductComponent },
  { path: 'student', component: StudentComponent },
  { path: 'faculty', component: FacultyComponent },
  { path: 'expriences', component: ExpriencesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

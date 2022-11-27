import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiStudentService {
  apiUrl = 'https://6311884019eb631f9d740d9b.mockapi.io/Studentapi';
  constructor(private __http: HttpClient) {}

  getAllStudent() {
    return this.__http.get(this.apiUrl);
  }
  getStudentById(id: any) {
    return this.__http.get(this.apiUrl + '/' + id);
  }
  deleteStudentById(id: any) {
    return this.__http.delete(this.apiUrl + '/' + id);
  }
}

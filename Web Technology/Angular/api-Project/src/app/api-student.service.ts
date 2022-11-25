import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiStudentService {
  constructor(private __http: HttpClient) {}

  getAllStudent() {
    return this.__http.get(
      'https://6311884019eb631f9d740d9b.mockapi.io/Studentapi'
    );
  }
  getStudentById(id: any) {
    return this.__http.get(
      'https://6311884019eb631f9d740d9b.mockapi.io/Studentapi/' + id
    );
  }
}

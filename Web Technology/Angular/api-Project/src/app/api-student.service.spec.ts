import { TestBed } from '@angular/core/testing';

import { ApiStudentService } from './api-student.service';

describe('ApiStudentService', () => {
  let service: ApiStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

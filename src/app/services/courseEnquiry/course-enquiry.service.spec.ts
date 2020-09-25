import { TestBed } from '@angular/core/testing';

import { CourseEnquiryService } from './course-enquiry.service';

describe('CourseEnquiryService', () => {
  let service: CourseEnquiryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseEnquiryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

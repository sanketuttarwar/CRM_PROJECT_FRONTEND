import { TestBed } from '@angular/core/testing';

import { ResourceEnquiryDetailsService } from './resource-enquiry-details.service';

describe('ResourceEnquiryDetailsService', () => {
  let service: ResourceEnquiryDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResourceEnquiryDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

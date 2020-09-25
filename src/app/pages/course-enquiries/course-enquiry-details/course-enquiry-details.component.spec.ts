import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEnquiryDetailsComponent } from './course-enquiry-details.component';

describe('CourseEnquiryDetailsComponent', () => {
  let component: CourseEnquiryDetailsComponent;
  let fixture: ComponentFixture<CourseEnquiryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseEnquiryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseEnquiryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

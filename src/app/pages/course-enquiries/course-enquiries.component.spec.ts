import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEnquiriesComponent } from './course-enquiries.component';

describe('CourseEnquiriesComponent', () => {
  let component: CourseEnquiriesComponent;
  let fixture: ComponentFixture<CourseEnquiriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseEnquiriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseEnquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

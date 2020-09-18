import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceEnquiryDetailsComponent } from './resource-enquiry-details.component';

describe('ResourceEnquiryDetailsComponent', () => {
  let component: ResourceEnquiryDetailsComponent;
  let fixture: ComponentFixture<ResourceEnquiryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceEnquiryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceEnquiryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

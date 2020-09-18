import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceEnquiriesComponent } from './resource-enquiries.component';

describe('ResourceEnquiriesComponent', () => {
  let component: ResourceEnquiriesComponent;
  let fixture: ComponentFixture<ResourceEnquiriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceEnquiriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceEnquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceEnquiriesPieComponent } from './resource-enquiries-pie.component';

describe('ResourceEnquiriesPieComponent', () => {
  let component: ResourceEnquiriesPieComponent;
  let fixture: ComponentFixture<ResourceEnquiriesPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceEnquiriesPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceEnquiriesPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CourseEnquiryService } from 'src/app/services/courseEnquiry/course-enquiry.service';

@Component({
  selector: 'app-course-enquiry-details',
  templateUrl: './course-enquiry-details.component.html',
  styleUrls: ['./course-enquiry-details.component.css']
})
export class CourseEnquiryDetailsComponent implements OnInit {
  courseEnquiry: any;

  constructor(public service: CourseEnquiryService, public route: ActivatedRoute, public location: Location) { }

  ngOnInit(): void {
        this.getDetail();
  }

  getDetail(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getCourseEnquiry(id).subscribe(
      (res) => {
        this.courseEnquiry = res;
        console.log(res);
      }
    );
  }

  onBack(){
      this.location.back();
  }

  onChangeStatus(f: NgForm){
        this.courseEnquiry.enquiryStatus = f.value.status;
       var id = +this.courseEnquiry.enquiryId;
        this.service.changeStatus(id, this.courseEnquiry).subscribe(
          res => console.log(res)
        );
  }

}

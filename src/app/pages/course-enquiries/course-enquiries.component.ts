import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CourseEnquiryService} from '../../services/courseEnquiry/course-enquiry.service';

@Component({
  selector: 'app-course-enquiries',
  templateUrl: './course-enquiries.component.html',
  styleUrls: ['./course-enquiries.component.css']
})
export class CourseEnquiriesComponent implements OnInit {
  list: any;

  constructor(public service: CourseEnquiryService, public router: Router) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.service.getCourseEnquiries().subscribe(
      (res) => {
       this.list = res;
       console.log(res);
      }
    );
  }

  onSeeDetails(id: number){
     this.router.navigate(['courseEnquiries/'+id]);
  }

  onCreateEnquiry(){
    this.router.navigate(['courseEnquiries/enquiryForm']);
  }

}

import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/services/authentication/authentication-service.service';
import {CourseEnquiryService} from '../../services/courseEnquiry/course-enquiry.service';

@Component({
  selector: 'app-course-enquiries',
  templateUrl: './course-enquiries.component.html',
  styleUrls: ['./course-enquiries.component.css']
})
export class CourseEnquiriesComponent implements OnInit {
  list: any;
  role: any;
  isFilterClicked=false;

  constructor(public service: CourseEnquiryService, public router: Router, public roleService: AuthenticationServiceService) { }

  ngOnInit(): void {
    this.role = this.roleService.getRoleId();
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

  onApplyFilters(form: NgForm){
      this.isFilterClicked = !this.isFilterClicked;

      if(form.value.name != '')
      {
        this.list = this.list.filter(d=> d.name == form.value.name);
      }
      else if(form.value.email != '')
      {
        this.list = this.list.filter(d=> d.email == form.value.email);
      }
      else if(form.value.contact != ''){
        this.list = this.list.filter(d=> d.contact == form.value.contact);
      }
      else if(form.value.status != ''){
        this.list = this.list.filter(d=> d.enquiryStatus == form.value.status);
      }
      form.reset();
  }

  onCancelFilters(form: NgForm){
      this.isFilterClicked = false;
      form.reset();

  }

  onReload(){
    this.ngOnInit();
  }

  onAsc(){

    this.list.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  onDsc(){

    this.list.sort((b, a) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }


}

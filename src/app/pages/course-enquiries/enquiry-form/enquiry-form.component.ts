import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CourseEnquiry } from 'src/app/models/course-enquiry.model';
import { CourseEnquiryService } from 'src/app/services/courseEnquiry/course-enquiry.service';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.css']
})
export class EnquiryFormComponent implements OnInit {
  courses: any[];
  selectedCourse: any;
  selectedCourseId: any;
  degrees: string[];


  constructor(public location: Location, public service: CourseEnquiryService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(){
      this.service.getCourses().subscribe(
       (res) => {
         this.courses = res;
         console.log(this.courses);
       }
     );
  }

  doSomething(id: any){
    console.log(id);

      this.selectedCourse = this.courses.find(d => d.courseId == id);
      this.degrees = this.selectedCourse.degrees;

  }

  onCancel(){
      this.location.back();
  }

  onSubmit(f: NgForm){
   var courseEnquiry: CourseEnquiry = new CourseEnquiry();

    courseEnquiry.Name = f.value.name;
    courseEnquiry.Email = f.value.email;
    courseEnquiry.CourseId = +f.value.courseId;
    courseEnquiry.Dob = f.value.dob;
    courseEnquiry.Degree = f.value.degree;
    courseEnquiry.Percentage = +f.value.percentage;
    courseEnquiry.Contact = (f.value.contact).toString();
    courseEnquiry.DegreeYear = +f.value.degreeYear;
    courseEnquiry.EnquiryId = 0;


    console.log(courseEnquiry);

    this.service.createCourseEnquiry(courseEnquiry).subscribe(
      res => console.log(res)
    );

    // f.reset();

    this.location.back();
  }

}

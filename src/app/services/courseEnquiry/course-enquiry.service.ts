import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {CourseEnquiry} from 'src/app/models/course-enquiry.model';



@Injectable({
  providedIn: 'root'
})
export class CourseEnquiryService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCourseEnquiries(): Observable<any>{
      return this.http.get<any>(this.baseUrl + 'CourseEnquiries').pipe(
        map(res => {
          return res;
        })
      );
  }

  getCourseEnquiry(id: number): Observable<any>{
    return this.http.get(this.baseUrl + 'CourseEnquiries/' + id).pipe(
      map(res => {
        return res;
      })
    );
  }

  getCourses(): Observable<any>{
    return this.http.get(this.baseUrl + 'CourseManagement').pipe(
      map(res => {
        return res;
      })
    );
  }

  createCourseEnquiry(newEnquiry: CourseEnquiry): Observable<any>{
     return this.http.post(this.baseUrl+'CourseEnquiries', newEnquiry).pipe(
       map(res => {return res;})
     );
  }


  changeStatus(id: number, enquiry: any): Observable<any>{
    console.log(enquiry.enquiryStatus);
    return this.http.put(this.baseUrl+'courseEnquiries/'+ id, enquiry).pipe(
      map(res => {return res;})
    );
  }
}

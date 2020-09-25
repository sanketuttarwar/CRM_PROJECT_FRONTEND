import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';

//components
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminlayoutComponent } from './layouts/adminlayout/adminlayout.component';
import { AuthlayoutComponent } from './layouts/authlayout/authlayout.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { ResourceEnquiriesComponent } from './pages/resource-enquiries/resource-enquiries.component';
import { ResourceEnquiryDetailsComponent } from './pages/resource-enquiries/resource-enquiry-details/resource-enquiry-details.component'
import { ResourceEnquiriesPieComponent } from './pages/resource-enquiries/resource-enquiries-pie/resource-enquiries-pie.component';

//services
import { RequestInterceptorService } from './interceptors/request-interceptor.service';
import { AuthenticationServiceService } from './services/authentication/authentication-service.service';
import { AlertifyService } from './services/alertify/alertify.service';
import { ResourceEnquiryService } from './services/resourceEnquiry/resource-enquiry.service';
import { CourseEnquiriesComponent } from './pages/course-enquiries/course-enquiries.component';
import { CourseEnquiryDetailsComponent } from './pages/course-enquiries/course-enquiry-details/course-enquiry-details.component';
import { EnquiryFormComponent } from './pages/course-enquiries/enquiry-form/enquiry-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    AdminlayoutComponent,
    AuthlayoutComponent,
    CoursesComponent,
    ResourcesComponent,
    ResourceEnquiriesComponent,
    ResourceEnquiryDetailsComponent,
    ResourceEnquiriesPieComponent,
    CourseEnquiriesComponent,
    CourseEnquiryDetailsComponent,
    EnquiryFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ChartsModule,
    ReactiveFormsModule
  ],
  providers: [
    AlertifyService,
    ResourceEnquiryService,
    AuthenticationServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

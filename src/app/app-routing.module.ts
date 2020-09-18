import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminlayoutComponent } from './layouts/adminlayout/adminlayout.component';
import { AuthlayoutComponent } from './layouts/authlayout/authlayout.component';
import { ResourceEnquiriesComponent } from './pages/resource-enquiries/resource-enquiries.component';
import { ResourceEnquiryDetailsComponent } from './pages/resource-enquiries/resource-enquiry-details/resource-enquiry-details.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { ResourceEnquiryDetailsService } from './resolvers/resource-enquiry-details/resource-enquiry-details.service';
import { ResourceEnquiriesPieComponent } from './pages/resource-enquiries/resource-enquiries-pie/resource-enquiries-pie.component';
import { CourseEnquiriesComponent } from './pages/course-enquiries/course-enquiries.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  {
    path: 'login',
    component: AuthlayoutComponent,
  },
  {
    path: '',
    component: AdminlayoutComponent,
    canActivate: [AuthGuardGuard],
    children: [
      {
        path: 'resourceEnquiries',
        component: ResourceEnquiriesComponent,
      },
      {
        path: 'resourceEnquiries/:id',
        component: ResourceEnquiryDetailsComponent,
        resolve: { resourceEnquiry: ResourceEnquiryDetailsService },
      },
      {
        path: 'resourceEnquiries/statistics/pie',
        component: ResourceEnquiriesPieComponent,
      },


      {
        path: 'courseEnquiries',
        component: CourseEnquiriesComponent,
      },


      {
        path: 'resources',
        component: ResourcesComponent,
      },

      {
        path: 'courses',
        component: CoursesComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

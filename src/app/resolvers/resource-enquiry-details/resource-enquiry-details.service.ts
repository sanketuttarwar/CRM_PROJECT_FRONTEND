import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ResourceEnquiry } from 'src/app/models/resource-enquiry';
import { ResourceEnquiryService } from 'src/app/services/resourceEnquiry/resource-enquiry.service';

@Injectable({
  providedIn: 'root'
})
export class ResourceEnquiryDetailsService implements Resolve<ResourceEnquiry> {

  constructor(private resourceEnquiryService: ResourceEnquiryService) { }
  resolve(route: ActivatedRouteSnapshot): Observable<ResourceEnquiry> {
    console.log(route.paramMap.get('id'));
    return this.resourceEnquiryService.getResourceEnquiry(route.paramMap.get('id')).pipe(

    );
}
}

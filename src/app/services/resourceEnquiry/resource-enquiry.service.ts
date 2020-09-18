import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ResourceEnquiry } from '../../models/resource-enquiry';
import { PaginatedResult } from 'src/app/models/pagination';
import { Summary } from '../../models/summary';

@Injectable({
  providedIn: 'root'
})
export class ResourceEnquiryService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getResourceEnquiries(page?, itemsPerPage?, userParams?): Observable<PaginatedResult<ResourceEnquiry[]>> {
    const paginatedResult: PaginatedResult<ResourceEnquiry[]> = new PaginatedResult<ResourceEnquiry[]>();
    let params = new HttpParams();

    if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
    }

    if(userParams != null) {
      if(userParams.status != null) {
        params = params.append('Status', userParams.status);
      }

      if(userParams.enquiryId != null) {
        params = params.append('EnquiryId', userParams.enquiryId);
      }

      if(userParams.resourceId != null) {
        params = params.append('ResourceId', userParams.resourceId);
      }

      if(userParams.date != null) {
        let startMonth = userParams.date[0].getMonth() + 1;
        let endMonth = userParams.date[1].getMonth() + 1;
        params = params.append('StartDate', ((userParams.date[0].getFullYear()) + '-' + ("0" + startMonth).slice(-2) + '-' + ("0" + userParams.date[0].getDate()).slice(-2)));
        params = params.append('EndDate', ((userParams.date[1].getFullYear()) + '-' + ("0" + endMonth).slice(-2) + '-' + ("0" + userParams.date[1].getDate()).slice(-2)));
      }

      if(userParams.order != null) {
        params = params.append('Order', userParams.order);
      }
    }

    return this.http.get<ResourceEnquiry[]>(this.baseUrl + 'ResourceEnquiries', { observe: 'response', params})
    .pipe(
      map(response => {
        paginatedResult.result = response.body;
        if (response.headers.get('Pagination') != null) {
          paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
        }
        return paginatedResult;
      })
    );
  }

  public updateResourceEnquiry(resourceEnquiry: ResourceEnquiry, id: number): Observable<ResourceEnquiry> {
    return this.http.put<ResourceEnquiry>(this.baseUrl + 'ResourceEnquiries/' + id, resourceEnquiry)
    .pipe(
      map(response => {
        return response;
      })
    );
  }

  public getResourceEnquiry(id: string): Observable<ResourceEnquiry> {
    return this.http.get<ResourceEnquiry>(this.baseUrl + 'ResourceEnquiries/' + id)
    .pipe(
      map(response => {
        console.log(response);
        return response;
      })
    );
  }

  public getSummary(): Observable<Summary> {
    return this.http.get<Summary>(this.baseUrl + 'ResourceEnquiries/Summary')
    .pipe(
      map(response => {
        return response;
      })
    );
  }

}

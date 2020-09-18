import { Component, OnInit } from '@angular/core';
import { ResourceEnquiry } from 'src/app/models/resource-enquiry';
import { PaginatedResult, Pagination } from 'src/app/models/pagination';
import { ResourceEnquiryService } from 'src/app/services/resourceEnquiry/resource-enquiry.service';
import { Summary } from '../../models/summary';

@Component({
  selector: 'app-resource-enquiries',
  templateUrl: './resource-enquiries.component.html',
  styleUrls: ['./resource-enquiries.component.css'],
})
export class ResourceEnquiriesComponent implements OnInit {
  resourceEnquiryData: ResourceEnquiry[];
  pagination: Pagination;
  statusList = [{value: 'Pending', display: 'Pending'}, {value: 'Alloted', display: 'Alloted'}, {value: 'Cancelled', display: 'Cancelled'}];
  orderByList = [{value: 'ascending', display: 'Date Asc.'}, {value: 'descending', display: 'Date Des.'}];
  userParams: any = {};
  summaryData: any = {};

  constructor(private resourceEnquiryService: ResourceEnquiryService) {
    this.pagination = {
      TotalCount: 0,
      PageSize: 2,
      CurrentPage: 1,
      HasNext: false,
      HasPrevious: false,
    };

    this.userParams.status = null;
    this.userParams.enquiryId = null;
    this.userParams.resourceId = null;
    this.userParams.date = null;
    this.userParams.order = null;

    this.summaryData.TotalEnquiries = 0;
    this.summaryData.AllottedEnquiries = 0;
    this.summaryData.PendingEnquiries = 0;
    this.summaryData.CancelledEnquiries = 0;
  }

  ngOnInit() {
    this.resourceEnquiryService.getSummary().subscribe((data) => {
      this.summaryData = data;
    });

    

    this.resourceEnquiryService.getResourceEnquiries(1, 2).subscribe((data) => {
      console.log(data);
      this.resourceEnquiryData = data.result;
      this.pagination = data.pagination;
      console.log('asdasdsadasdasdasdas' + typeof this.userParams.date);
      if(this.userParams.date == null) {
console.log('ooooooooooooooooooo');
      }else {
        console.log('rrrrrrrrrrrrr');

      }
    });
  }

  pageChanged(event: any): void {
    console.log(this.userParams.date);

    this.pagination.CurrentPage = event.page;
    this.loadEnquiries();

  }

  loadEnquiries() {
    console.log(this.userParams.date);
    this.resourceEnquiryService
      .getResourceEnquiries(
        this.pagination.CurrentPage,
        this.pagination.PageSize,
        this.userParams
      )
      .subscribe((data) => {
        this.resourceEnquiryData = data.result;
        this.pagination = data.pagination;
      });
  }

  resetFilters() {
    this.userParams.status = null;
    this.userParams.enquiryId = null;
    this.userParams.resourceId = null;
    this.userParams.date = null;
    this.userParams.order = null;
    this.loadEnquiries();
  }
}

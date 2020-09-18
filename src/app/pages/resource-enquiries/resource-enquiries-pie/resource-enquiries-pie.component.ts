import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Location } from '@angular/common';
import { ResourceEnquiryService } from 'src/app/services/resourceEnquiry/resource-enquiry.service';
import { Summary } from '../../../models/summary';

@Component({
  selector: 'app-resource-enquiries-pie',
  templateUrl: './resource-enquiries-pie.component.html',
  styleUrls: ['./resource-enquiries-pie.component.css']
})
export class ResourceEnquiriesPieComponent implements OnInit {
  public baseUrl = environment.apiUrl;
  public pieChartLabels = ['Allotted', 'Pending', 'Cancelled'];
  public pieChartData = [];
  public pieChartType = 'pie';
  public summaryData: Summary;

  constructor(private http: HttpClient, public location: Location, private resourceEnquiryService: ResourceEnquiryService) { }

  ngOnInit(){

    this.resourceEnquiryService.getSummary().subscribe((data) => {
      this.summaryData = data;
      this.pieChartData.push(this.summaryData['AllottedEnquiries']);
      this.pieChartData.push(this.summaryData['PendingEnquiries']);
      this.pieChartData.push(this.summaryData['CancelledEnquiries']);
    });
  }

}

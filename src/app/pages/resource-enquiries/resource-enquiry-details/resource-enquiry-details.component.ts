import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceEnquiryService } from 'src/app/services/resourceEnquiry/resource-enquiry.service';
import { Location } from '@angular/common';
import { AlertifyService } from 'src/app/services/alertify/alertify.service';
import { ResourceEnquiry } from 'src/app/models/resource-enquiry';
import { updateLocale } from 'ngx-bootstrap/chronos';

@Component({
  selector: 'app-resource-enquiry-details',
  templateUrl: './resource-enquiry-details.component.html',
  styleUrls: ['./resource-enquiry-details.component.css']
})
export class ResourceEnquiryDetailsComponent implements OnInit {
  statusInput: string;
  changeStatusInput: boolean = false;
  enquiryData: ResourceEnquiry;

  constructor(public resourceEnquiryService: ResourceEnquiryService, private route: ActivatedRoute, public alertifyService: AlertifyService, public location: Location) { 
  }

  ngOnInit(){
    this.route.data.subscribe((data) => {
      this.enquiryData = data.resourceEnquiry;
    });
  }

  changeStatusBoolean() {
    this.changeStatusInput = ! this.changeStatusInput;
  }

  changeStatus() {


    this.alertifyService.confirm("Confirm", "Are you sure ?", () => {
      this.update();
    });
  }

  update() {
    let resourceEnquiry: ResourceEnquiry;
    resourceEnquiry = {
      enquiryId: this.enquiryData.enquiryId,
      resourceId: this.enquiryData.resourceId,
      organizationName: this.enquiryData.organizationName,
      email: this.enquiryData.email,
      contact: this.enquiryData.contact,
      date: this.enquiryData.date,
      enquiryStatus: this.statusInput,
      lastModifiedOn: this.enquiryData.lastModifiedOn
    }

    this.resourceEnquiryService.updateResourceEnquiry(resourceEnquiry, resourceEnquiry.enquiryId).subscribe((data) => {
      this.resourceEnquiryService.getResourceEnquiry(resourceEnquiry.enquiryId.toString()).subscribe((data) => {
        this.enquiryData = data;
        this.alertifyService.success("Updated Successfully");
        this.changeStatusBoolean();
      });
      
    });
  }

}

import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.css']
})
export class EnquiryFormComponent implements OnInit {

  constructor(public location: Location) { }

  ngOnInit(): void {
  }

  onCancel(){
      this.location.back();
  }

  onSubmit(f: NgForm){

    this.location.back();
  }

}

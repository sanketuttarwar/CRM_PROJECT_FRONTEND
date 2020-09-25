import { Component, OnInit } from '@angular/core';
import {ResourceService} from '../../services/resource/resource.service';
import {Resource} from '../../models/resource.model';
import { PaginatedResult, Pagination } from 'src/app/models/pagination';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  pagination: Pagination;
  userParams: any={};


  constructor(private resourecService:ResourceService) {
    this.pagination = {
      TotalCount: 0,
      PageSize: 5,
      CurrentPage: 1,
      HasNext: false,
      HasPrevious: false,
    };

    this.userParams.resourceName = null;
    this.userParams.minrent = null;
    this.userParams.maxrent = null;
    this.userParams.availability = null;
    //this.userParams.order = null;

  
   }
  
  list:Resource[];
  ngOnInit(){
   this.getAllResources();
    
  }


  public getAllResources()
  {
    this.resourecService.getResources(1,5).subscribe(res=>{
      this.pagination=res.pagination;
      this.list=res.result;  
    });
  }
  
  applyFilter()
  {
     //console.log(this.userParams);

     this.resourecService.getResources(this.pagination.CurrentPage,this.pagination.PageSize,this.userParams).subscribe(
       res=>{
         this.list=res.result;
         this.pagination=res.pagination;
         console.log(res);
       }
     );

  }

  reset()
  {
    this.userParams.resourceName = null;
    this.userParams.minrent = null;
    this.userParams.maxrent = null;
    this.userParams.availability = null;
    this.applyFilter();
  }

  pageChanged(event:any):void{
    this.pagination.CurrentPage=event.page;
    this.applyFilter();
  }

}

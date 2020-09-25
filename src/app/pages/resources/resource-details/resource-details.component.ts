import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Resource } from 'src/app/models/resource.model';
import { ResourceService } from 'src/app/services/resource/resource.service';

@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.css']
})
export class ResourceDetailsComponent implements OnInit {

  constructor(private resourceService:ResourceService,private route:ActivatedRoute,private router:Router) { }
  id:number;
  editMode=true;
  resource:Resource;
  @ViewChild('f') resourceform:NgForm;
  ngOnInit(): void {

  //  this.id=this.route.snapshot.params.id;
  //  this.getResource();
   this.route.params.subscribe((params:Params)=>{
     this.id=+params['id'];
     this.editMode=params['id']!=null;
     console.log(this.editMode);
   });
   if(this.editMode)
   {
    this.resource=this.route.snapshot.data['resource'];
    console.log(this.resource);
    this.populateForm();
   }
   else
   {
     this.resource=new Resource();
   }
   //console.log(this.resourceform);
  
  }

  onSubmit()
  {
   console.log(this.resource); 
   if(this.editMode)
   {
     this.resourceService.updateResource(this.resource.resourceId,this.resource).subscribe(res=>{
       console.log(res);
        alert("Information updated successfully!");
         this.router.navigate(['/resources']); 
     });
   }
   else
   {
     this.resourceService.addResource(this.resource).subscribe(res=>{
      console.log(res);

      alert("Resource added successfully!");
      this.router.navigate(['/resources']); 
    
     });
   }
  }
   populateForm()
   {
      // this.resourceform.setValue({
      //   id:this.resource.resourceId
      // });
   }
  // getResource()
  // {
  //   this.resourceService.getResource(this.id).subscribe(res=>{
  //     this.resource=res;
  //     this.resource.resourceName=res.resourceName;
  //     console.log(this.resource);
  //   });
   
  
}

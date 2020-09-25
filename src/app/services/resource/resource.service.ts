import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PaginatedResult } from 'src/app/models/pagination';
import {environment} from '../../../environments/environment';
import {Resource} from '../../models/resource.model';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  
  baseUrl=environment.apiUrl;
  constructor(private http:HttpClient) { }

  
  public getResources(page?,itemsPerPage?,userParams?):Observable<PaginatedResult<Resource[]>>{

    const paginatedResult:PaginatedResult<Resource[]>=new PaginatedResult<Resource[]>();
     let uparams=new HttpParams();

     if(page!=null && itemsPerPage!=null)
     {

       uparams=uparams.append('pageNumber',page);
       uparams=uparams.append('pageSize',itemsPerPage);
     }
     if(userParams!=null)
     {
          if(userParams.resourceName!=null)
        {
          uparams=uparams.append('resourceName',userParams.resourceName);
        }
        if(userParams.minrent!=null && userParams.maxrent!=null)
        {
          uparams=uparams.append('minrent',userParams.minrent);
          uparams=uparams.append('maxrent',userParams.maxrent);
        }
        if(userParams.availability!=null)
        {
          uparams=uparams.append('availability',userParams.availability);
        }
     }

     return this.http.get<Resource[]>(this.baseUrl+"resources",{observe:'response',params:uparams}).pipe(
       map(res=>{
         paginatedResult.result=res.body;
         if(res.headers.get('Pagination')!=null)
         {
           paginatedResult.pagination=JSON.parse(res.headers.get('Pagination'));
         }
         return paginatedResult;
       })
     );
  }




  // public getResources():Observable<Resource[]>
  // {
  //   return this.http.get<Resource[]>(this.baseUrl+"resources");
  // }


  public getResource(id:number):Observable<Resource>
  {
    return this.http.get<Resource>(this.baseUrl+'resources/'+id).pipe(
      map(res=>{
        return res;
      })
    );
  }

  public updateResource(id:number,resource:Resource)
  {
    return this.http.put(this.baseUrl+'resources/'+id,resource);
  }

  public addResource(resource:Resource )
  {
    return this.http.post(this.baseUrl+'resources/',resource);
  }

  public deleteResource(id:number)
  {
    this.http.delete(this.baseUrl+'resources/'+id);
  }
}

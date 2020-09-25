import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Resource } from 'src/app/models/resource.model';
import { ResourceService } from 'src/app/services/resource/resource.service';

@Injectable({
  providedIn: 'root'
})
export class ResourceResolverService implements Resolve<Resource> {

  constructor(private resourceService:ResourceService) { }

  resolve(route:ActivatedRouteSnapshot):Observable<Resource>
  {
      console.log(route.params.id);
      return this.resourceService.getResource(route.params.id);
  }
}

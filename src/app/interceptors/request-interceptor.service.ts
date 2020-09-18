import { HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if( localStorage.getItem('token') != null ) {
        const clonedReq = req.clone( {
            headers: req.headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'))
        } );
        return next.handle(clonedReq);
    }
    return next.handle(req);
  }
}

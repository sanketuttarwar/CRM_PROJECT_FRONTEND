import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  baseUrl = environment.apiUrl;
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  roleId = 0;

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.baseUrl + 'loginmodule/authenticate', model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
          this.getRoleId();
        }
      })
    );
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  getDecodedToken() {
    this.decodedToken = this.jwtHelper.decodeToken(
      localStorage.getItem('token')
    );
    return this.decodedToken;
  }

  getRoleId() {
    if (this.loggedIn()) {
      this.decodedToken = this.jwtHelper.decodeToken(
        localStorage.getItem('token')
      );
      return this.decodedToken['role'];
    }
    return 0;
  }
}

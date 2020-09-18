import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../../services/authentication/authentication-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isNavbarToggle : boolean = false; 

  constructor(authService: AuthenticationServiceService, private router: Router) { }

  ngOnInit(){
  }

  navbarToggle() {
    this.isNavbarToggle = !this.isNavbarToggle;
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../../services/authentication/authentication-service.service'

@Component({
  selector: 'app-authlayout',
  templateUrl: './authlayout.component.html',
  styleUrls: ['./authlayout.component.css']
})
export class AuthlayoutComponent implements OnInit {
  loginForm: FormGroup;
  loginModel: any = {};
  errorMessage: String = '';
  loginLoading: boolean = false;

  constructor(private authService: AuthenticationServiceService, private router: Router) {}

  ngOnInit() {
    if (this.loggedIn()) {
      this.router.navigate(['']);
    }

    this.loginForm = new FormGroup({
      loginEmail: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      loginPassword: new FormControl(null, [Validators.required]),
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.loginLoading = true;

      this.loginModel.email = this.loginForm.get('loginEmail').value;
      this.loginModel.passwword = this.loginForm.get('loginPassword').value;

      this.authService.login(this.loginModel).subscribe(
        (next) => {},
        (error) => {
          if (error.status == 400) {
            this.errorMessage = error.error.message;
          } else if (error.status == 500) {
            this.errorMessage = 'Server error';
          } else {
            this.errorMessage = 'Error';
          }
          this.loginLoading = false;
        },
        () => {
          this.loginLoading = false;
          this.loginForm.reset();
          this.router.navigate(['']);
        }
      );
    }
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: any = FormGroup;
  errormsg: any;
  successmsg: any;
  users: any;


  constructor(private formBuilder: FormBuilder,
    private activateRouter: ActivatedRoute,
    private router: Router,
    private userservice: UserService) {
    localStorage.clear()
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  logInFunction() {
    if (!this.loginForm.valid) {
      return;
    }
    if (this.loginForm.valid) {

      if (this.loginForm.value.email == 'admin@gmail.com') {
        this.userservice.loginUser(this.loginForm.value).subscribe((res) => {
          console.log(res, 'Logged In as Admin');
          sessionStorage.setItem('isUserLoggedIn', JSON.stringify(true));
          //this.loginForm.reset();
          this.router.navigate(['profile']);
        })
      }
      else {
        this.userservice.loginUser(this.loginForm.value).subscribe((res) => {
          console.log(res,'Logged In');
          sessionStorage.setItem('isUserLoggedIn', JSON.stringify(false));
          //this.loginForm.reset();
          this.router.navigate(['home']);
        })
      }
    }
  }
}
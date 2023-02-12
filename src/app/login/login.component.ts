import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm:any = FormGroup;
  errormsg:any;
  successmsg:any;
  users: any;


  constructor (private formBuilder: FormBuilder,
    private activateRouter: ActivatedRoute,
    private router: Router,
    private userservice: UserService){
  }

ngOnInit(): void {
  
}

  logInFunction()
  {
    
  }
}

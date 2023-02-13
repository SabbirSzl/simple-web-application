import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{

  //user: User = new User();
  registrationForm:any = FormGroup;
  errormsg:any;
  successmsg:any;
  users: any;

  constructor(
    private formBuilder: FormBuilder,
    private activateRouter: ActivatedRoute,
    private router: Router,
    private userservice: UserService
  )
  {

  }
ngOnInit():void{
  this.registrationForm = this.formBuilder.group({
    firstname:['',Validators.required],
    lastname:['',Validators.required],
    email:['',[Validators.required, Validators.email]],
    password:['',Validators.required],
  });
}

registrationClick(){
  if (!this.registrationForm.valid){
    return;
  }
  if(this.registrationForm.valid){
    this.userservice.registerNewUser(this.registrationForm.value).subscribe((res)=>{
      console.log(res,'Registered');
      this.registrationForm.reset();
      this.successmsg = res.message;
      alert('Registered suceess');
    })
  }
}





}


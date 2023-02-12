import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  registrationForm:any = FormGroup;
  responseMessage:any;

  
  users: any;



  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private userservice: UserService
  )
  {

  }
ngOnInit():void{
  this.registrationForm = this.formBuilder.group({
    firstname:[null,[Validators.required]],
    lastname:[null,[Validators.required]],
    email:[null,[Validators.required]],
    password:[null,[Validators.required]]
  })
}
  registrationClick()
  {
    var formData = this.registrationForm.value;
    var data = {
    }
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  users: any;

constructor( private userservice: UserService, private route: Router){

}

ngOnInit():void{
  this.getAllUsers();
}

getAllUsers(){
  this.userservice.getAllData().subscribe((res)=> {
    this.users = res.data;
  });
  console.log(this.users);
}
}

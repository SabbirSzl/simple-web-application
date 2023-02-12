import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  users: any;

constructor( private userservice: UserService){

}

ngOnInit():void{
  this.getAllUsers();
}

getAllUsers(){
  this.userservice.getAllData().subscribe((res)=> {
    this.users = res.data;
  })
}
}

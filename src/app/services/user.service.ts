import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //url = environment.apiUrl;


  constructor( private httpclient: HttpClient) { }


  registration(data:any){
    /*return this.httpclient.post(this.url+"/user/registration",data,
    {
      headers: new HttpHeaders().set('Content-Type',"application/json")
    })*/
  }
}

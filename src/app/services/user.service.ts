import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
//import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor( private _http: HttpClient) { }

  apiUrl = 'http://localhost:8080/user';

  //get all the data
  getAllData():Observable<any>{
  return this._http.get(`${this.apiUrl}/profile`);
  }
// REgister new user
  registerNewUser(data: any): Observable<any>{
    return this._http.post(`${this.apiUrl}/registration`, data);
  }
}

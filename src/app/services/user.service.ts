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

  getAllData():Observable<any>{
  return this._http.get(`${this.apiUrl}`);
  }
}

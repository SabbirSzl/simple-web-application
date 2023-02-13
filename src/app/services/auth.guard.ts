import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,    
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let loggedInStatus = sessionStorage.getItem('isUserLoggedIn') || undefined;
      if(loggedInStatus && loggedInStatus == 'true') {
        return true;
      } else  {
        this.router.navigate(['home']);
        return false;
      }    
  }
  
}

  import { Injectable } from '@angular/core';
  import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
  import { AuthenticationService } from '../authentication.service';
  
  @Injectable({
    providedIn: 'root'
  })
  export class UserIsAnnoymousService implements CanActivate {
  
    constructor(private router: Router,
      private hardcodedAuthentication: AuthenticationService) { }
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (!this.hardcodedAuthentication.isUserLoggedIn())
        return true;
      
      this.router.navigate(['places'])
      return false;
    }
  
  }
  
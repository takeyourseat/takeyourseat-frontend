import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AppConstants } from '../AppConstants';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  obtainAccessToken(loginUsername, loginPassword, ifSucces: (data) => void, ifFail: (error) => void) {
    let headers = new HttpHeaders()
      .append('Content-type', 'application/x-www-form-urlencoded; charset=utf-8')
      .append('Authorization', 'Basic ' + btoa(AppConstants.CLIENT_ID() + ":" + AppConstants.CLIENT_SECRET()));

    var credentials = ""
      + "username=" + loginUsername
      + "&password=" + loginPassword
      + "&grant_type=password"

    this.http.post(AppConstants.AUTH_GET_TOKEN_URL(), credentials, { headers: headers })
      .subscribe(
        data => {
          sessionStorage.setItem("access_token", data['access_token'])
          sessionStorage.setItem("username", loginUsername)
          ifSucces(data)
        },
        error => {
          ifFail(error)
        });
  }

  /** Ask before Using!! */
  getToken(): string{
    return sessionStorage.getItem('access_token');
  }

  getUserName():string{
    return sessionStorage.getItem('username');
  }

  isUserLoggedIn():boolean{
    if(!sessionStorage.getItem('access_token'))
      return false
    else if(!sessionStorage.getItem('username'))
      return false
    else 
      return true
  }

  logOut() {
    sessionStorage.removeItem('access_token')
    sessionStorage.removeItem('username')
    
  }
  
}

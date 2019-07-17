import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppConstants} from '../AppConstants';
import { UserService } from './user.service';
import { OneUser } from '../components/users/model/users';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private router: Router,
    private http: HttpClient,
    private userService: UserService,
  ) {
  }
  loggedInUser: OneUser;

  private static getHeaders(): HttpHeaders {
    return new HttpHeaders()
      .append('Content-type', 'application/x-www-form-urlencoded; charset=utf-8')
      .append('Authorization', 'Basic ' + btoa(AppConstants.CLIENT_ID() + ':' + AppConstants.CLIENT_SECRET()));
  }

  obtainAccessToken(loginUsername, loginPassword, ifSucces: (data) => void, ifFail: (error) => void) {
    const headers = AuthenticationService.getHeaders();

    const credentials = ''
      + 'username=' + loginUsername
      + '&password=' + loginPassword
      + '&grant_type=password';

    this.http.post(AppConstants.AUTH_GET_TOKEN_URL(), credentials, {headers})
      .subscribe(
        (data: any) => {
          localStorage.setItem('access_token', data.access_token);
          localStorage.setItem('refresh_token', data.refresh_token);
          localStorage.setItem('username', loginUsername);
          this.loadLoggedInUser();
          ifSucces(data);
        },
        error => {
          ifFail(error);
        });
  }

  refreshAccessToken(): Observable<string> {
    const headers = AuthenticationService.getHeaders();
    const credentials = `refresh_token=${this.getRefreshToken()}&grant_type=refresh_token`;
    return new Observable( observer => {
      this.http.post(AppConstants.AUTH_GET_TOKEN_URL(), credentials, {headers}).subscribe(
        (data: any) => {
          localStorage.setItem('access_token', data.access_token);
          localStorage.setItem('refresh_token', data.refresh_token);
          observer.next(data.refresh_token);
          observer.complete();
        },
        error => {
          observer.error(error);
        }
      );
    }
  );

  }

  /** Ask before Using!! */
  getAccessToken(): string {
    return localStorage.getItem('access_token');
  }

  getRefreshToken(): string {
    return localStorage.getItem('refresh_token');

  }

  getUserName(): string {
    return localStorage.getItem('username');
  }

  isUserLoggedIn(): boolean {
    if (!localStorage.getItem('access_token')) {
      return false;
    } else if (!localStorage.getItem('username')) {
      return false;
    } else {
      return true;
    }
  }

  logOut() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('username');
    this.clearLoggedInUser();

  }

  getLoggedInUser(): Observable<OneUser> {
    return this.http.get<OneUser>(AppConstants.USER_MANAGEMENT_URL() + 'users/' + this.getUserName());
  }

  loadLoggedInUser() {
    this.getLoggedInUser().subscribe(
      (data) => this.loggedInUser = data
    );
  }

  clearLoggedInUser() {
    this.loggedInUser = null;
  }

}

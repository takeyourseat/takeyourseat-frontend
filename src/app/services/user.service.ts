import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PLACE_MANAGEMENT_API, USER_MANAGEMENT_API} from '../constants';
import {User} from '../model/User';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {
  }

  getUserByUsername(username: string): Observable<User> {
    return this.http.get<User>(USER_MANAGEMENT_API + `users/${username}`).pipe(catchError(this.handleError));
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(PLACE_MANAGEMENT_API + `users`).pipe(catchError(this.handleError));
  }

  getUsersByManagerId(id: number): Observable<User[]> {
    return this.http.get<User[]>(PLACE_MANAGEMENT_API + `users/?managerId=${id}`).pipe(catchError(this.handleError));
  }

  getUsersByManagerUsername(username: string): Observable<User[]> {
    return this.http.get<User[]>(USER_MANAGEMENT_API + `users?manager=${username}`);
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}

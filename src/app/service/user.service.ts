import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiURL } from '../constants';
import { User } from '../model/User';
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(apiURL + `users/${id}`).pipe(catchError(this.handleError));
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(apiURL + `users`).pipe(catchError(this.handleError));
  }

  getUsersByManagerId(id: number): Observable<User[]> {
    return this.http.get<User[]>(apiURL + `users/?managerId=${id}`).pipe(catchError(this.handleError));
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

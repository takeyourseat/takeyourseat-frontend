import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConstants} from '../AppConstants';
import {User} from '../model/User';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {UserModel} from '../components/users/model/users';
import {RolesService} from './roles.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private roleService: RolesService,
  ) {
  }

  getUserByUsername(username: string): Observable<User> {
    return this.http.get<User>(AppConstants.USER_MANAGEMENT_URL() + `users/${username}`).pipe(catchError(this.handleError));
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(AppConstants.PLACE_MANAGEMENT_API() + `users`).pipe(catchError(this.handleError));
  }

  getUsersByManagerId(id: number): Observable<User[]> {
    return this.http.get<User[]>(AppConstants.PLACE_MANAGEMENT_API() + `users/?managerId=${id}`).pipe(catchError(this.handleError));
  }

  getUsersByManagerUsername(username: string): Observable<User[]> {
    return this.http.get<User[]>(AppConstants.USER_MANAGEMENT_URL() + `users?manager=${username}`);
  }

  public mapRoles(users: UserModel[]) {
    for (const user of users) {
      this.roleService.getRoleByUsername(user.username).subscribe(
        userInfo => {
          user.role = userInfo.role;
        }
      );
    }
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

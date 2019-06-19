import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiURL } from '../constants';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {
  }

  getUserById(id: number) {
    return this.http.get<User>(apiURL + `users/${id}`);
  }

  getUsers() {
    return this.http.get<User[]>(apiURL + `users`);
  }

  getUsersByManagerId(id: number) {
    return this.http.get<User[]>(apiURL + `users/?managerId=${id}`);
  }
}

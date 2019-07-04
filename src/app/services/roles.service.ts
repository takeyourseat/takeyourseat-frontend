import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from '../model/Role';
import { HttpClient } from '@angular/common/http';
import {AppConstants} from '../AppConstants'

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(
    private http: HttpClient,
    ) { }

  getAllRoles():Observable<Role[]> {
    return this.http.get<Role[]>(AppConstants.AUTHORIZATION_SERVICE_URL()+"roles/grants")
  }

}

import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Role, UserModel, UserViewModel} from '../model/users';
import {AlertsComponent} from '../../alerts/alerts.component';

@Component({
  selector: 'app-user-creator',
  templateUrl: './user-creator.component.html',
  styleUrls: ['./user-creator.component.css']
})
export class UserCreatorComponent implements OnInit {
  allUsers: UserModel[] = [];
  allRoles: Role[] = [];

  model: UserViewModel = {
    fName: '',
    lName: '',
    email: '',
    username: '',
    manager: '',
    role: '',
    password: ''
  };



  public createUser() {
    const url = 'http://user-management:8085/users';
    this.http.post(url, this.model).subscribe(
      res => {
        alert('New employee was successfully created! \n Congratulations! ');
        location.reload();
      },
      error => {
        AlertsComponent.display('danger', 'Could not create a user');
      }
    );
  }


  public getAllRoles() {
    const url = 'http://authorization-server:8086/api/v01/roles';
    this.http.get<Role[]>(url).subscribe(
      res => {
        this.allRoles = res;
      },
      err => {
        alert('Something goes wrong with roles');
      }
    );
  }


  public getUsers() {
    const url = 'http://user-management:8085/users';
    this.http.get<UserModel[]>(url).subscribe(
      res => {
        this.allUsers = res;
      },
      err => {
        alert('Something goes wrong');
      }
    );
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getUsers();
    this.getAllRoles();
  }

}

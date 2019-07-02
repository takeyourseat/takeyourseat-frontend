import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AllUsers, OneUser, Role} from './model/users';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  oneUser: OneUser[] = [];
  allUsers: AllUsers[] = [];
  allRoles: Role[] = [];


  searchModel: UserSearchModel = {
    searchArgument: ''
  };

  roleViewModel: RoleViewModel = {
    id: '',
    name: ''
  };

  model: UserViewModel = {
    fName: '',
    lName: '',
    email: '',
    username: '',
    jobTitle: '',
    manager: '',
    role: ''
  };


  public createUser() {
    const url = 'http://localhost:8085/users/createUser';
    this.http.post(url, this.model).subscribe(
      res => {
        alert('New employee was successfully created! \n Congratulations! ');
        location.reload();
      },
      error => {
        alert('An error has been occured during the creating the new employee');
      }
    );
  }

  public getOneUser(searchArgument: string) {
    const url = `http://localhost:8085/users/${searchArgument}/info`;
    this.http.post<OneUser[]>(url, this.searchModel).subscribe(
      res => {

        this.oneUser = res;
      },
      err => {
        alert('Could not perform searching. Something is going wrong in app!');
      }
    );
  }

  public getRoles() {
    const url = 'http://localhost:8085/users/getRoles';
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
    const url = 'http://localhost:8085/users/getUsers';
    this.http.get<AllUsers[]>(url).subscribe(
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
    this.getRoles();
  }

}

export interface UserViewModel {
  fName: string;
  lName: string;
  email: string;
  username: string;
  jobTitle: string;
  manager: string;
  role: string;
}

export interface UserSearchModel {
  searchArgument: string;
}

export interface RoleViewModel {
  id: string;
  name: string;
}



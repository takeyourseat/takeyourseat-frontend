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

searchArgument: string;

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
    role: '',
    password: ''
  };


  public createUser() {
    const url = 'http://localhost:8085/users';
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
    const url = `http://localhost:8085/users?searchArgument=${searchArgument}`;
    this.http.get<OneUser[]>(url).subscribe(
      res => {

        this.oneUser = res;
      },
      err => {
        alert('Could not perform searching. Something is going wrong in app!');
      }
    );
  }

  public getRoles() {
    const url = 'http://localhost:8085/roles';
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
    const url = 'http://localhost:8085/users';
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
  password: string;
}


export interface RoleViewModel {
  id: string;
  name: string;
}



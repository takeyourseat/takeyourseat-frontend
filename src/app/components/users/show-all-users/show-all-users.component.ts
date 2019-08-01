import {Component, OnInit} from '@angular/core';
import {Role, UserModel, UserViewModel} from '../model/users';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-show-all-users',
  templateUrl: './show-all-users.component.html',
  styleUrls: ['./show-all-users.component.css']
})
export class ShowAllUsersComponent implements OnInit {
  allUsers: UserModel[] = [];
  allRoles: Role[] = [];

  selectedUser: UserModel;

  model: UserViewModel = {
    fName: '',
    lName: '',
    email: '',
    username: '',
    manager: '',
    role: '',
    password: ''
  };


  public selectUser(user: UserModel) {
    this.selectedUser = user;
  }

  constructor(
    private http: HttpClient,
    private userService: UserService,
              ) {
  }

  public getAllRoles() {
    const url = 'http://localhost:8086/api/v01/roles';
    this.http.get<Role[]>(url).subscribe(
      res => {
        this.allRoles = res;
      },
      err => {
        alert('Something goes wrong with roles');
      }
    );
  }


  public getAllUsers() {
    const url = 'http://localhost:8085/users';
    this.http.get<UserModel[]>(url).subscribe(
      res => {
        this.allUsers = res;
        this.userService.mapRoles(res);
      },
      err => {
        alert('Something goes wrong');
      }
    );
  }


  public editUser() {
    const url = 'http://localhost:8085/users/edit';
    this.http.post(url, this.model).subscribe(
      res => {
        alert('Employee was successfully edited! \n Congratulations! ');
        location.reload();
      },
      error => {
        alert('An error has been occurred during the editing the new employee');
      }
    );
  }


  ngOnInit() {
    this.getAllUsers();
    this.getAllRoles();
  }

}

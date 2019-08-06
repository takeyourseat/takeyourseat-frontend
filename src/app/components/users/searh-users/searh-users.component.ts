import { Component, OnInit } from '@angular/core';
import {UserModel, UserViewModel} from '../model/users';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../../services/user.service';
import {AlertsComponent} from '../../alerts/alerts.component';

@Component({
  selector: 'app-searh-users',
  templateUrl: './searh-users.component.html',
  styleUrls: ['./searh-users.component.css']
})
export class SearhUsersComponent implements OnInit {
  oneUser: UserModel[] = [];

  searchArgument: string;


  model: UserViewModel = {
    fName: '',
    lName: '',
    email: '',
    username: '',
    manager: '',
    role: '',
    password: ''
  };



  public getOneUser(searchArgument: string) {
    const url = `http://user-management:8085/users?searchArgument=${searchArgument}`;
    this.http.get<UserModel[]>(url).subscribe(
      res => {
        this.userSearch.mapRoles(res);
        this.oneUser = res;
        AlertsComponent.clearMessages();
        AlertsComponent.display('success', 'Users with matching criteria are found');
      },
      err => {
        AlertsComponent.display('not found', 'Could not perform searching. Something is going wrong in app!');
      }
    );
  }

  constructor(
    private http: HttpClient,
    private userSearch: UserService,
    ) {
  }

  ngOnInit() {
  }

}

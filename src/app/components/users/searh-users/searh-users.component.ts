import { Component, OnInit } from '@angular/core';
import {UserModel, UserViewModel} from '../model/users';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-searh-users',
  templateUrl: './searh-users.component.html',
  styleUrls: ['./searh-users.component.css']
})
export class SearhUsersComponent implements OnInit {
  oneUser: UserModel[] = [];
  allUsers: UserModel[] = [];


  searchArgument: string;


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



  public getOneUser(searchArgument: string) {
    const url = `http://localhost:8085/users?searchArgument=${searchArgument}`;
    this.http.get<UserModel[]>(url).subscribe(
      res => {

        this.oneUser = res;
      },
      err => {
        alert('Could not perform searching. Something is going wrong in app!');
      }
    );
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

}

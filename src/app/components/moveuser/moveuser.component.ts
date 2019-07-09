import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../model/User';
import {AuthenticationService} from '../../services/authentication.service';
import {Office} from '../../model/Office';

@Component({
  selector: 'app-moveuser',
  templateUrl: './moveuser.component.html',
  styleUrls: ['./moveuser.component.css']
})
export class MoveuserComponent implements OnInit {

  users: User[] = [];
  offices: Office[] = [];

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.getUsersByManagerUsername(this.authenticationService.getUserName());
  }

  getUsersByManagerUsername(user: string) {
    this.userService.getUsersByManagerUsername(user).subscribe(
      response => {
        this.users = response;
      }
    );
  }
}

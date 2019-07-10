import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  notificationsOpened = false;

  constructor(
    public authentificationService: AuthenticationService
  ) { }
  ngOnInit() {
    if(this.authentificationService.isUserLoggedIn())
      this.authentificationService.loadLoggedInUser()
  }

  toggleNotificationCenter() {
    console.log(this.notificationsOpened)
    this.notificationsOpened = !this.notificationsOpened;
  }
}

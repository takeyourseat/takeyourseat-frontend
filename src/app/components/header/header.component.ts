import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authentificationService: AuthenticationService
  ) { }
  ngOnInit() {
    if(this.authentificationService.isUserLoggedIn())
      this.authentificationService.loadLoggedInUser()
  }

}

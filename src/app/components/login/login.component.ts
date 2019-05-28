import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AlertsComponent } from '../includes/alerts/alerts.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginUsername
  public loginPassword
  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }

  login() {
      this.auth.obtainAccessToken(this.loginUsername, this.loginPassword,this.ifSucces,this.ifFail)
  }

  ifSucces(data){
    alert("success");
  }

  ifFail(error){
    AlertsComponent.displayDanger("Unable to Log in, please try again")
  }

}

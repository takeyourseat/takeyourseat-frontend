import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AlertsComponent } from '../alerts/alerts.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginUsername
  public loginPassword
  constructor(private auth: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
  }

  login() {
      this.auth.obtainAccessToken(this.loginUsername, this.loginPassword,this.ifSucces,this.ifFail)
  }

  ifSucces = (data) => {
    this.router.navigate(['/all-places'])//.then(() => AlertsComponent.displaySuccess("Log in successfull")) // disabled until dismissable alerts are available
  }

  ifFail(error){
    AlertsComponent.displayDanger("Unable to Log in, please try again")
  }

}

import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from 'src/app/services/authentication.service';
import {AlertsComponent} from '../alerts/alerts.component';
import {Router} from '@angular/router';
import {SwPush} from '@angular/service-worker';
import {PlacerequestService} from '../../services/placerequest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginUsername;
  public loginPassword;
  readonly key = 'BIo4B1bsWsS3fDQZJjFo3k_M9C5sMm929H5EJMbqcYicjCiseaYeCDsE6dIB5NNw4u6rlW8YUWhs-evYAwa2mOM';
  readonly privateKey = 'dw1-Fz9_bD1aX9OAZ8uRt8c5p-CNNczirkGBiMYTUVM';

  constructor(private auth: AuthenticationService,
              private router: Router,
              private swPush: SwPush,
              private placerequestService: PlacerequestService) {
  }

  subscribeToNotifications() {

    this.swPush.requestSubscription({
      serverPublicKey: this.key
    })
      .then(sub => {
        console.log(sub.toJSON());
      })
      .catch(err => console.error('Could not subscribe to notifications', err));
  }

  ngOnInit() {
  }

  login() {
    this.auth.obtainAccessToken(this.loginUsername, this.loginPassword, this.ifSucces, this.ifFail);
  }

  ifSucces = (data) => {
    this.router.navigate(['/places']);
    this.subscribeToNotifications();
  };

  ifFail(error) {
    AlertsComponent.display('danger', 'Unable to Log in, please try again');
  }

}





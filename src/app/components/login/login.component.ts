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
  readonly VAPID_PUBLIC_KEY = 'BLBx-hf2WrL2qEa0qKb-aCJbcxEvyn62GDTyyP9KTS5K7ZL0K7TfmOKSPqp8vQF0DaG8hpSBknz_x3qf5F4iEFo';

  constructor(private auth: AuthenticationService,
              private router: Router,
              private swPush: SwPush,
              private placerequestService: PlacerequestService) {
  }

  subscribeToNotifications() {

    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
      .then(sub => this.placerequestService.getPlaceRequestsByUsername('csava').subscribe())
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





import {Component} from '@angular/core';
import {SwPush} from '@angular/service-worker';
import {PlacerequestService} from './services/placerequest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'takeyourseat';

  readonly VAPID_PUBLIC_KEY = 'BLBx-hf2WrL2qEa0qKb-aCJbcxEvyn62GDTyyP9KTS5K7ZL0K7TfmOKSPqp8vQF0DaG8hpSBknz_x3qf5F4iEFo';

  constructor(
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
}

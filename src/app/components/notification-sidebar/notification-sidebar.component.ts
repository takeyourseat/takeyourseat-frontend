import {Component, OnInit} from '@angular/core';
import {SwPush} from '@angular/service-worker';
import {PushNotification} from '../../model/PushNotification';

@Component({
  selector: 'app-notification-sidebar',
  templateUrl: './notification-sidebar.component.html',
  styleUrls: ['./notification-sidebar.component.css']
})
export class NotificationSidebarComponent implements OnInit {

  notifications: PushNotification[] = [];

  constructor(push: SwPush) {
    push.messages.subscribe(msg => {
      this.notifications.unshift(msg as PushNotification);
    });

    const key = 'BIo4B1bsWsS3fDQZJjFo3k_M9C5sMm929H5EJMbqcYicjCiseaYeCDsE6dIB5NNw4u6rlW8YUWhs-evYAwa2mOM';
    const privateKey = 'dw1-Fz9_bD1aX9OAZ8uRt8c5p-CNNczirkGBiMYTUVM';
    push.requestSubscription({serverPublicKey: key})
      .then(pushSubscription => {
        console.log(pushSubscription.toJSON());
      });
  }

  ngOnInit() {
    this.notifications.unshift(
      {
        category: 'Place',
        notification: {
          title: 'Here is title',
          body: 'mha body is nobody body',
          image: '../../../assets/icons/icon-72x72.png'
        },
      });
    this.notifications.unshift({
        category: 'Place',
        notification: {
          title: 'Hey oh',
          body: 'listen what I say oh',
          image: '../../../assets/icons/icon-72x72.png'
        },
      },
    );
  }

}

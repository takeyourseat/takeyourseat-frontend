import {Injectable} from '@angular/core';
import {PushNotification} from '../model/PushNotification';
import {SwPush} from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  notifications: PushNotification[] = [];

  constructor(push: SwPush) {

    push.notificationClicks.subscribe(
      (arg) => {
        console.log('notification clicked ' + arg.notification.data.url);
      }
    );

    push.messages.subscribe(msg => {
      this.notifications.unshift(msg as PushNotification);
    });

    const key = 'BIo4B1bsWsS3fDQZJjFo3k_M9C5sMm929H5EJMbqcYicjCiseaYeCDsE6dIB5NNw4u6rlW8YUWhs-evYAwa2mOM';
    const privateKey = 'dw1-Fz9_bD1aX9OAZ8uRt8c5p-CNNczirkGBiMYTUVM';

    push.requestSubscription({serverPublicKey: key})
      .then(() => console.log('Push permission received'));
  }

  closeNotification(notification: PushNotification) {
    this.notifications.splice(this.notifications.indexOf(notification), 1);
  }

}

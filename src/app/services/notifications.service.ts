import {Injectable} from '@angular/core';
import {SwPush} from '@angular/service-worker';
import {HttpClient} from '@angular/common/http';
import {AppConstants} from '../AppConstants';
import {AuthenticationService} from './authentication.service';
import {NotificationSubscription} from '../model/NotificationSubscription';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  notifications: Notification[] = [];

  constructor(
    private push: SwPush,
    private http: HttpClient,
    private authenticationService: AuthenticationService
    ) {
    push.messages.subscribe((msg: any) => {
      if (msg.notification) {
        this.notifications.unshift(msg.notification as Notification);
      }
    });
  }

  requestNotificationSubscription() {
    const key = 'BIo4B1bsWsS3fDQZJjFo3k_M9C5sMm929H5EJMbqcYicjCiseaYeCDsE6dIB5NNw4u6rlW8YUWhs-evYAwa2mOM';
    const privateKey = 'dw1-Fz9_bD1aX9OAZ8uRt8c5p-CNNczirkGBiMYTUVM';

    this.push.requestSubscription({serverPublicKey: key})
      .then(
        data => this.postSubscriptionToNotificationService(data)
      );
  }

  postSubscriptionToNotificationService(pushSubscription: PushSubscription) {
    const username: string = this.authenticationService.getUserName();
    const payload = new NotificationSubscription(pushSubscription, username);

    console.log(payload);
    this.http.post(AppConstants.NOTIFICATION_SERVICE_URL() + 'subscriptions/', payload).subscribe(
      (data) => console.log(data),
      error1 => { console.log(error1); }
    );
  }

  executeAction(action: string, notification: Notification) {
    console.log(notification);
    if (!action) {
      action = 'default';
    }
    open(notification.data.actionLinks[action] );
  }


closeNotification(notification: Notification) {
    this.notifications.splice(this.notifications.indexOf(notification), 1);
  }

}

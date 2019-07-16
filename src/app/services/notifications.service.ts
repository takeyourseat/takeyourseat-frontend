import {Injectable} from '@angular/core';
import {SwPush} from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  notifications: Notification[] = [];

  constructor(push: SwPush) {

    /* For development purpose only */
    this.notifications.push(
      new Notification('Notification with images', {
        body: 'Big image is marked as "image" while the small one as "icon"' ,
        image: 'https://www.intheblack.com/-/media/intheblack/allimages/sponsored-content/2018/dexus-office-space.jpg',
        icon: 'https://png.pngtree.com/svg/20160308/3cb5ad269d.png',
        silent: true,
      }),
      new Notification('Simple notification', {
        body: 'This notification has text only',
        silent: true,
      })
    );

    push.messages.subscribe((msg: any) => {
      if (msg.notification) {
        this.notifications.unshift(msg.notification as Notification);
      }

    });

    const key = 'BIo4B1bsWsS3fDQZJjFo3k_M9C5sMm929H5EJMbqcYicjCiseaYeCDsE6dIB5NNw4u6rlW8YUWhs-evYAwa2mOM';
    const privateKey = 'dw1-Fz9_bD1aX9OAZ8uRt8c5p-CNNczirkGBiMYTUVM';

    push.requestSubscription({serverPublicKey: key})
      .then(() => console.log('Push permission received'));
  }



  executeAction(action: string, notification: NotificationOptions & {title: string}) {
    if (!action) {
      action = 'default';
    }
    open(notification.data.actionLinks[action] );
  }


closeNotification(notification: Notification) {
    this.notifications.splice(this.notifications.indexOf(notification), 1);
  }

}

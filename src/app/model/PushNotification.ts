export class PushNotification {
  category: string;
  notification: NotificationBody;

  constructor(category: string, notification: NotificationBody) {
    this.category = category;
    this.notification = notification;
  }
}

export class NotificationBody {
  title: string;
  body: string;
  image: string;
}

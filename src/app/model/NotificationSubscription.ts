export class NotificationSubscription {
  username: string;
  auth: string;
  key: string;
  endpoint: string;



  constructor(subscription: PushSubscription, username: string) {
    const subscriptionJSON = subscription.toJSON();
    this.username = username;
    this.auth = subscriptionJSON.keys.auth;
    this.key = subscriptionJSON.keys.p256dh;
    this.endpoint = subscriptionJSON.endpoint;
  }
}

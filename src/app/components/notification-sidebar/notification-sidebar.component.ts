import {Component, OnInit} from '@angular/core';
import {PushNotification} from '../../model/PushNotification';
import {NotificationsService} from '../../services/notifications.service';

@Component({
  selector: 'app-notification-sidebar',
  templateUrl: './notification-sidebar.component.html',
  styleUrls: ['./notification-sidebar.component.css']
})
export class NotificationSidebarComponent implements OnInit {

  constructor(private notificationService: NotificationsService) {
  }

  ngOnInit() {
  }

  closeNotification(notification: PushNotification) {
    this.notificationService.closeNotification(notification);
  }
}

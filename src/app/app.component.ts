import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'takeyourseat';
 isNotificationSidebarOpen = false;

  toggleNotificationSidebar($event: boolean) {
    console.log($event)
    this.isNotificationSidebarOpen = $event;
  }
}

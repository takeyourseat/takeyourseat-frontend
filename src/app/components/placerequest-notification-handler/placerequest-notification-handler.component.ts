import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PlacerequestService} from '../../services/placerequest.service';
import {AlertsComponent} from '../alerts/alerts.component';
import {error} from 'selenium-webdriver';

@Component({
  selector: 'app-placerequest-notification-handler',
  templateUrl: './placerequest-notification-handler.component.html',
  styleUrls: ['./placerequest-notification-handler.component.css']
})
export class PlacerequestNotificationHandlerComponent implements OnInit {
  requestId: number;
  action: string;

  constructor(
    private activeRoute: ActivatedRoute,
    private placeRequestService: PlacerequestService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.action = params.action;
      this.requestId = params.id;
      console.log(params);
    });

    switch (this.action) {
      case 'approve': {
        this.placeRequestService.acceptPlaceRequest(this.requestId).subscribe(
          data => {
            this.router.navigate(['/']).then(
              value => AlertsComponent.display('success', 'Place request has been <b> accepted </b> ')
            );
          },
          e => {
            this.router.navigate(['/']).then(
              value => AlertsComponent.display(
                'danger', `Could not approve place request: ${e.error.message ? e.error.message : 'Unknown error'}`)
            );
          }
        );
        break;
      }

      case 'decline': {
        this.placeRequestService.declinePlaceRequest(this.requestId).subscribe(
          data => {
            this.router.navigate(['/']).then(
              value => AlertsComponent.display('success', 'Place request has been <b> declined </b>')
            );
          },
          e => {
            this.router.navigate(['/']).then(
              value => AlertsComponent.display(
                'danger', `Could not decline place request: ${e.error.message ? e.error.message : 'Unknown error'}`)
            );
            console.log(e);
          }
        );
        break;
      }
      default: {
        throw new Error('Illegal action ' + this.action);
      }
    }

  }

}

import {Component, Input, OnInit} from '@angular/core';
import {PlaceRequests} from '../../model/PlaceRequests';
import {UserService} from '../../services/user.service';
import {PlacerequestService} from '../../services/placerequest.service';
import {PlaceService} from '../../services/place.service';
import {error} from '@angular/compiler/src/util';
import {AuthenticationService} from 'src/app/services/authentication.service';
import {AlertsComponent} from '../alerts/alerts.component';

@Component({
  selector: 'app-userplacerequest',
  templateUrl: './userplacerequest.component.html',
  styleUrls: ['./userplacerequest.component.css']
})
export class UserplacerequestComponent implements OnInit {

  private placeRequests: PlaceRequests[];
  private isDataLoading: boolean = true;

  constructor(
    private placeRequestService: PlacerequestService,
    private authenticationService: AuthenticationService,
  ) {
  }

  ngOnInit() {
    this.loadPlaceRequestsByUsername(this.authenticationService.getUserName());
  }

  loadPlaceRequestsByUsername(username: string) {
    if (username == null) {
      AlertsComponent.display('danger','You have to be logged in to view this page, please log in again');
    }
    this.placeRequestService.getPlaceRequestsByUsername(username).subscribe(
      response => {
        this.placeRequests = response;
        if (this.placeRequests.length === 0) {
          this.isDataLoading = false;
        }
      },
      error => {
        this.isDataLoading = false;
      }
    );
  }
}

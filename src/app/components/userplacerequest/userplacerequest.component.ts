import {Component, Input, OnInit} from '@angular/core';
import {PlaceRequests} from '../../model/PlaceRequests';
import {UserService} from '../../service/user.service';
import {PlacerequestService} from '../../service/placerequest.service';
import {PlaceService} from '../../service/place.service';

@Component({
  selector: 'app-userplacerequest',
  templateUrl: './userplacerequest.component.html',
  styleUrls: ['./userplacerequest.component.css']
})
export class UserplacerequestComponent implements OnInit {

  private placeRequests: PlaceRequests[];

  constructor(
    private userService: UserService,
    private placeRequestService: PlacerequestService,
    private placeService: PlaceService
  ) {
  }

  ngOnInit() {
    this.loadPlaceRequestsByUserId(5);
  }

  loadPlaceRequestsByUserId(userId: number) {
    this.placeRequestService.getPlaceRequestsByUserId(userId).subscribe(
      response => {
        this.placeRequests = response;
        this.readPlaces(this.placeRequests);
      }
    );
  }

  readPlaces(placeRequests: PlaceRequests[]) {
    for (const placeRequest of placeRequests) {
      this.placeService.getPlaceById(placeRequest.placeId).subscribe(
        response => {
          placeRequest.place = response;
        }
      );
    }
  }

}

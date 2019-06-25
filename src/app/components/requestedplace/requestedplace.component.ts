import {Component, OnInit, Input} from '@angular/core';
import {UserService} from 'src/app/service/user.service';
import {PlacerequestService} from 'src/app/service/placerequest.service';
import {PlaceRequests} from 'src/app/model/PlaceRequests';
import {PlaceService} from '../../service/place.service';

@Component({
  selector: 'app-requestedplace',
  templateUrl: './requestedplace.component.html',
  styleUrls: ['./requestedplace.component.css']
})
export class RequestedplaceComponent implements OnInit {

  private placeRequests: PlaceRequests[] = [];
  private placeRequest: PlaceRequests;

  constructor(
    private userService: UserService,
    private placeRequestService: PlacerequestService,
    private placeService: PlaceService
  ) {
  }

  ngOnInit() {
    this.loadPlaceRequestByManager(2);
  }

  loadPlaceRequestByManager(id: number) {
    this.placeRequestService.getPlaceRequestsByManager(id).subscribe(
      response => {
        this.placeRequests = response;
        this.readUsers(this.placeRequests);
        this.readPlaces(this.placeRequests);
      }
    );
  }

  acceptPlaceRequest(id: number) {
    this.placeRequestService.acceptPlaceRequest(id).subscribe(
      response => {
        this.placeRequest = response;
        console.log(this.placeRequests);
      }
    );
    alert('place request accepted');
    location.reload();
  }

  declinePlaceRequest(id: number) {
    this.placeRequestService.declinePlaceRequest(id).subscribe(
      response => {
        this.placeRequest = response;
        console.log(this.placeRequests);
      }
    );
    alert('place request declined');
    location.reload();
  }

  readUsers(placeRequests: PlaceRequests[]) {
    for (const placeRequest of placeRequests) {
      this.userService.getUserById(placeRequest.userId).subscribe(
        response => {
          placeRequest.user = response;
        }
      );
    }
  }
}

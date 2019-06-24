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

  private Users: User[];
  private usersByManager: User[];
  private user: User;
  private placeRequests: PlaceRequests[] = [];
  private placeRequest: PlaceRequests;

  constructor(
    private userService: UserService,
    private placeRequestService: PlacerequestService
  ) {
  }

  ngOnInit() {
    this.loadPlaceRequestByManager(2);
  }

  loadUsers() {
    this.userService.getUsers().subscribe(
      response => {
        this.Users = response;
      }
    );
  }

  loadUserById(id: number) {
    this.userService.getUserById(id).subscribe(
      response => {
        this.user = response;
      }
    );
  }

  loadUsersByManagerId(id: number) {
    this.userService.getUsersByManagerId(id).subscribe(
      response => {
        this.usersByManager = response;
      }
    );
  }

  loadPlaceRequestByManager(id: number) {
    this.placeRequestService.getPlaceRequestsByManager(id).subscribe(
      response => {
        this.placeRequests = response;
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
}

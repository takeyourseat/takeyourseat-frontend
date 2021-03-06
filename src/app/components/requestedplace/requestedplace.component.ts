import {Component, OnInit, Input} from '@angular/core';
import {UserService} from 'src/app/services/user.service';
import {PlacerequestService} from 'src/app/services/placerequest.service';
import {PlaceRequests} from 'src/app/model/PlaceRequests';
import {AuthenticationService} from '../../services/authentication.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-requestedplace',
  templateUrl: './requestedplace.component.html',
  styleUrls: ['./requestedplace.component.css']
})
export class RequestedplaceComponent implements OnInit {

  public placeRequests: PlaceRequests[];
  public placeRequest: PlaceRequests;
  public isDataLoading: boolean = true;
  public highlightedRowId: string;

  constructor(
    private userService: UserService,
    private placeRequestService: PlacerequestService,
    private authenticationService: AuthenticationService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.loadPlaceRequestByManager();
    this.activatedRoute.fragment.subscribe(value => {
      this.highlightedRowId = value;
    });
  }

  loadPlaceRequestByManager() {
    const username = this.authenticationService.getUserName();
    this.placeRequestService.getPlaceRequestsByManager(username).subscribe(
      response => {
        this.placeRequests = response;
        this.readUsers(this.placeRequests);
        if (this.placeRequests.length === 0) {
          this.isDataLoading = false;
        }
      },
      error => {
        this.isDataLoading = false;
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
      this.userService.getUserByUsername(placeRequest.username).subscribe(
        response => {
          placeRequest.user = response;
        }
      );
    }
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { PlaceRequests } from '../../model/PlaceRequests';
import { UserService } from '../../service/user.service';
import { PlacerequestService } from '../../service/placerequest.service';
import { PlaceService } from '../../service/place.service';
import { error } from '@angular/compiler/src/util';

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
  ) {
  }

  ngOnInit() {
    this.loadPlaceRequestsByUserId(5);
  }

  loadPlaceRequestsByUserId(userId: number) {
    this.placeRequestService.getPlaceRequestsByUserId(userId).subscribe(
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

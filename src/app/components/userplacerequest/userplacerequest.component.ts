import {Component, OnInit} from '@angular/core';
import {User} from '../../model/User';
import {PlaceRequests} from '../../model/PlaceRequests';
import {UserService} from '../../service/user.service';
import {PlacerequestService} from '../../service/placerequest.service';

@Component({
  selector: 'app-userplacerequest',
  templateUrl: './userplacerequest.component.html',
  styleUrls: ['./userplacerequest.component.css']
})
export class UserplacerequestComponent implements OnInit {

  private placeRequests: PlaceRequests[];

  constructor(
    private userService: UserService,
    private placeRequestService: PlacerequestService
  ) {
  }

  ngOnInit() {
    this.loadPlaceRequestsByUserId(4);
  }

  loadPlaceRequestsByUserId(userId: number) {
    this.placeRequestService.getPlaceRequestsByUserId(userId).subscribe(
      response => {
        this.placeRequests = response;
      }
    );
  }

}

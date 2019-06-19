import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/User';
import { PlacerequestService } from 'src/app/service/placerequest.service';
import { PlaceRequests } from 'src/app/model/PlaceRequests';

@Component({
  selector: 'app-requestedplace',
  templateUrl: './requestedplace.component.html',
  styleUrls: ['./requestedplace.component.css']
})
export class RequestedplaceComponent implements OnInit {

  private Users: User[];
  private usersByManager: User[];
  private user: User;
  private placeRequests: PlaceRequests[];


  constructor(
    private userService: UserService,
    private placeRequestService: PlacerequestService
  ) { }

  ngOnInit() {
    this.getPlaceRequestByManager(2);
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      response => {
        this.Users = response;
      }
    )
  }

  getUserById(id: number) {
    this.userService.getUserById(id).subscribe(
      response => {
        this.user = response;
        console.log(this.user);
      }
    )
  }

  getUsersByManagerId(id: number) {
    this.userService.getUsersByManagerId(id).subscribe(
      response => {
        this.usersByManager = response;
        console.log(this.usersByManager);
      }
    )
  }

  getPlaceRequestByManager(id: number) {
    this.placeRequestService.getPlaceRequestsByManager(id).subscribe(
      response => {
        this.placeRequests = response;
        console.log(this.placeRequests);
      }
    )
  }

  // acceptPlaceRequest(id: number) {
  //   this.http.patch(apiURL + `requests/${id}`, {})
  // }

}

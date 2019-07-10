import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../model/User';
import {AuthenticationService} from '../../services/authentication.service';
import {Office} from '../../model/Office';
import {OfficeService} from '../../services/office.service';
import {PlaceService} from '../../services/place.service';
import {Place} from '../../model/Place';

@Component({
  selector: 'app-moveuser',
  templateUrl: './moveuser.component.html',
  styleUrls: ['./moveuser.component.css']
})
export class MoveuserComponent implements OnInit {

  users: User[] = [];
  offices: Office[] = [];
  places: Place[];
  newPlace: Place;
  selectedUser: User;
  selectedOffice: Place[];

  constructor(
    private userService: UserService,
    private officeService: OfficeService,
    private placeService: PlaceService,
    private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.getUsersByManagerUsername(this.authenticationService.getUserName());
    this.getOffices();
  }

  getUsersByManagerUsername(user: string) {
    this.userService.getUsersByManagerUsername(user).subscribe(
      response => {
        this.users = response;
      }
    );
  }

  getOffices() {
    this.officeService.getOffices().subscribe(
      response => {
        this.offices = response;
      }
    );
  }

  getPlacesByOfficeNumber(event: any) {
    this.placeService.getPlacesByOfficeNumber(event.target.value).subscribe(
      response => {
        this.selectedOffice = response;
        console.log(this.selectedOffice);
      }
    );
  }

  getUserByUsername(event: any) {
    this.userService.getUserByUsername(event.target.value).subscribe(
      response => {
        this.selectedUser = response;
      }
    );
  }
}

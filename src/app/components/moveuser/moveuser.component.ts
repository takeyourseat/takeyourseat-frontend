import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../model/User';
import {AuthenticationService} from '../../services/authentication.service';
import {Office} from '../../model/Office';
import {OfficeService} from '../../services/office.service';
import {PlaceService} from '../../services/place.service';
import {Place} from '../../model/Place';
import {AlertsComponent} from '../alerts/alerts.component';

@Component({
  selector: 'app-moveuser',
  templateUrl: './moveuser.component.html',
  styleUrls: ['./moveuser.component.css']
})
export class MoveuserComponent implements OnInit {

  users: User[] = [];
  offices: Office[] = [];
  places: Place[];
  selectedUser: User;
  selectedOffice: Place[];
  officeNumber: number;
  username: string;
  usernameSelect: string;
  selectPlace: Place;

  constructor(
    private userService: UserService,
    private officeService: OfficeService,
    private placeService: PlaceService,
    private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.getUsersByManagerUsername(this.authenticationService.getUserName());
    this.getOffices();
    console.log(this.officeNumber);
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
      }
    );
  }

  getUserByUsername() {
    this.userService.getUserByUsername(this.usernameSelect).subscribe(
      response => {
        this.selectedUser = response;
      }
    );
  }

  moveUser() {
    this.placeService.moveUserPlace(
      this.selectPlace.office.number,
      this.selectPlace.coordinateX,
      this.selectPlace.coordinateY,
      {username: this.usernameSelect}).subscribe(
      response => {
        AlertsComponent.display('success', `User ${this.usernameSelect} moved successfully`, 5000);
      }, error => {
        this.showError(error);
      }
    );
  }

  showError(message) {
    if (message.status === 404) {
      AlertsComponent.display('danger', 'Place can\'t be found', 5000);
    }
    if (message.status === 409) {
      AlertsComponent.display('danger', 'New place is busy', 5000);
      return;
    }
  }
}



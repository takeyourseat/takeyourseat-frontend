import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Place} from '../../model/Place';
import {User} from '../../model/User';
import {UserService} from 'src/app/services/user.service';
import {AlertsComponent} from '../alerts/alerts.component';
import {OfficeService} from '../../services/office.service';
import {PlaceService} from '../../services/place.service';
import {AuthenticationService} from '../../services/authentication.service';
import {Office} from '../../model/Office';
import {OneUser} from '../users/model/users';

@Component({
  selector: 'app-placeform',
  templateUrl: './placeform.component.html',
  styleUrls: ['./placeform.component.css']
})
export class PlaceformComponent implements OnInit, OnChanges {
  _selectedPlace: Place;
  user: User;

  users: User[] = [];
  offices: Office[] = [];
  places: Place[];
  selectedOffice: Place[];
  username: string;
  selectPlace: Place;
  userLoggedIn: OneUser;
  managerUsers: string[] = [];

  @Input()
  set selectedPlace(place: Place) {
    this._selectedPlace = place;
  }

  constructor(
    private userService: UserService,
    private officeService: OfficeService,
    private placeService: PlaceService,
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit() {
    this.getUsersByManagerUsername(this.authenticationService.getUserName());
    this.getOffices();
    this.authenticationService.getLoggedInUser().subscribe(
      (data) => {
        this.userLoggedIn = data;
      }
    );
  }

  ngOnChanges() {
    this.loadUserByUsername(this._selectedPlace.username);
    this.getOffices();
    this.selectedOffice = [];
  }

  loadUserByUsername(username: string) {
    this.userService.getUserByUsername(username).subscribe(
      response => {
        this.user = response;
      }
    );
  }

  getUsersByManagerUsername(user: string) {
    this.userService.getUsersByManagerUsername(user).subscribe(
      response => {
        this.users = response;
        for (const managerUser of response) {
          this.managerUsers.push(managerUser.username);
        }
      }, error => {
        this.showError(error);
      }
    );
  }

  getOffices() {
    this.officeService.getOffices().subscribe(
      response => {
        this.offices = response;
      }, error => {
        this.showError(error);
      }
    );
  }

  getPlacesByOfficeNumber(event: any) {
    this.placeService.getPlacesByOfficeNumber(event.target.value).subscribe(
      response => {
        this.selectedOffice = response;
      }, error => {
        this.showError(error);
      }
    );
  }

  moveUser() {
    this.placeService.moveUserPlace(
      this.selectPlace.office.number,
      this.selectPlace.coordinateX,
      this.selectPlace.coordinateY,
      {username: this.user.username}).subscribe(
      response => {
        AlertsComponent.display('success', `User ${this.user.username} moved successfully`, 5000);
        location.reload();
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

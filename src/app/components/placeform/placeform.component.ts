import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Place} from '../../model/Place';
import {User} from '../../model/User';
import {UserService} from 'src/app/services/user.service';
import {AlertsComponent} from '../alerts/alerts.component';
import {OfficeService} from '../../services/office.service';
import {PlaceService} from '../../services/place.service';
import {AuthenticationService} from '../../services/authentication.service';
import {Office} from '../../model/Office';
import {UserModel} from '../users/model/users';
import {RolesService} from '../../services/roles.service';

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
  userLoggedIn: UserModel;
  managerUsers: string[] = [];

  availablePlaces: Place[];
  availablePlacesOffice: Place[];
  distinctOffices: any;

  placeByUsername: Place;
  allPlaces: Place[] = [];
  role: string;

  @Input()
  set selectedPlace(place: Place) {
    this._selectedPlace = place;
  }

  constructor(
    private userService: UserService,
    private officeService: OfficeService,
    private placeService: PlaceService,
    private authenticationService: AuthenticationService,
    private roleService: RolesService
  ) {
  }

  ngOnInit() {
    this.getUsersByManagerUsername(this.authenticationService.getUserName());
    this.authenticationService.getLoggedInUser().subscribe(
      (data) => {
        this.userLoggedIn = data;
      }
    );
    this.getAvailablePlaces();
    this.getAllPlaces();
    this.getRolesByUsername(this._selectedPlace.username);
  }

  ngOnChanges() {
    this.loadUserByUsername(this._selectedPlace.username);
    this.selectedOffice = [];
    this.getPlaceByUsername(this._selectedPlace.username);
    this.getAvailablePlaces();
    this.getRolesByUsername(this._selectedPlace.username);
  }

  loadUserByUsername(username: string) {
    this.userService.getUserByUsername(username).subscribe(
      response => {
        this.user = response;
      }, error => {
        this.showError(error);
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

  getAvailablePlaces() {
    this.placeService.getAvailablePlaces().subscribe(
      response => {
        this.availablePlaces = response;
        this.distinctOffices = Array.from(new Set(this.availablePlaces.map(place => place.office.number)));
        this.distinctOffices.sort();
      }, error => {
        this.showError(error);
      }
    );
  }

  getAvailablePlacesByOfficeNumber(event: any) {
    this.placeService.getAvailablePlacesByOfficeNumber(event.target.value).subscribe(
      response => {
        this.availablePlacesOffice = response;
      }, error => {
        this.showError(error);
      }
    );
  }

  getPlaceByUsername(username: string) {
    for (const place of this.allPlaces) {
      if (place.username === username) {
        this.placeByUsername = place;
        console.log(this.placeByUsername.id);
      }
    }
  }

  getRolesByUsername(username) {
    this.roleService.getRoleByUsername(username).subscribe(
      response => {
        this.role = response.role.name;
      }, error => {
        this.showError(error);
      }
    );
  }

  getAllPlaces() {
    this.placeService.getAllPlaces().subscribe(
      response => {
        this.allPlaces = response;
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

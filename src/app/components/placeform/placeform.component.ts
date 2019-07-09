import { Component, Input, OnChanges } from '@angular/core';
import { Place } from '../../model/Place';
import { User } from '../../model/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-placeform',
  templateUrl: './placeform.component.html',
  styleUrls: ['./placeform.component.css']
})
export class PlaceformComponent implements OnChanges {
  public _selectedPlace: Place;
  public user: User;

  @Input()
  set selectedPlace(place: Place) {
    this._selectedPlace = place;
  }

  constructor(
    private userService: UserService
  ) { }

  ngOnChanges() {
    this.loadUserByUsername(this._selectedPlace.username);
  }

  loadUserByUsername(username: string) {
    this.userService.getUserByUsername(username).subscribe(
      response => {
        this.user = response;
      }
    );
  }
}

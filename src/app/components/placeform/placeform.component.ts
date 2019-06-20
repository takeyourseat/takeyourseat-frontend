import { Component, Input, OnChanges } from '@angular/core';
import { Place } from '../../model/Place';
import { User } from '../../model/User';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-placeform',
  templateUrl: './placeform.component.html',
  styleUrls: ['./placeform.component.css']
})
export class PlaceformComponent implements OnChanges {
  private _selectedPlace: Place;
  private user: User;

  @Input()
  set selectedPlace(place: Place) {
    this._selectedPlace = place;
  }

  constructor(
    private userService: UserService
  ) { }

  ngOnChanges() {
    this.loadUserById(this._selectedPlace.userId);
  }

  loadUserById(id: number) {
    this.userService.getUserById(id).subscribe(
      response => {
        this.user = response;
      }
    );
  }
}

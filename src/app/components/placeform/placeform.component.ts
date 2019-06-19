import { Component, Input, OnInit } from '@angular/core';
import { Place } from '../../model/Place';
import { User } from '../../model/User';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-placeform',
  templateUrl: './placeform.component.html',
  styleUrls: ['./placeform.component.css']
})
export class PlaceformComponent implements OnInit {
  private _selectedPlace: Place;
  private user: User;

  @Input()
  set selectedPlace(place: Place) {
    this._selectedPlace = place;
  }

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUserById(this._selectedPlace.userId);
  }

  getUserById(id: number) {
    this.userService.getUserById(id).subscribe(
      response => {
        this.user = response;
      }
    )
  }
}

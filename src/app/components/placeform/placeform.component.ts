import {Component, Input, OnInit} from '@angular/core';
import {Place} from '../../model/Place';

@Component({
  selector: 'app-placeform',
  templateUrl: './placeform.component.html',
  styleUrls: ['./placeform.component.css']
})
export class PlaceformComponent implements OnInit {
  private _selectedPlace: Place;

  @Input()
  set selectedPlace(place: Place) {
    this._selectedPlace = place;
    console.log(this._selectedPlace);
  }

  constructor() {
  }

  ngOnInit() {
  }

}

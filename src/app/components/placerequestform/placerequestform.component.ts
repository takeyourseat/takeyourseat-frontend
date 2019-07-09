import {Component, Input, OnInit} from '@angular/core';
import {Place} from '../../model/Place';

@Component({
  selector: 'app-placerequestform',
  templateUrl: './placerequestform.component.html',
  styleUrls: ['./placerequestform.component.css']
})
export class PlacerequestformComponent implements OnInit {

  public _selectedPlace: Place;

  @Input()
  set selectedPlace(place: Place) {
    this._selectedPlace = place;
  }

  constructor() {
  }

  ngOnInit() {
  }

}

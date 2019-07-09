import { Component, OnInit, Input } from '@angular/core';
import { Office } from 'src/app/model/Office';
import { Place } from 'src/app/model/Place';

@Component({
  selector: 'app-placetable',
  templateUrl: './placetable.component.html',
  styleUrls: ['./placetable.component.css'],
})
export class PlacetableComponent implements OnInit {
  public schema: any[][];
  public _places: Place[] = [];
  public _selectedOffice: Office;
  public selectedPlace: Place;

  @Input()
  set places(places: Place[]) {
    this._places = places;
    this.showPlaces();
  }

  @Input()
  set selectedOffice(selectedOffice: Office) {
    this._selectedOffice = selectedOffice;
  }

  constructor() {
  }

  ngOnInit() {
  }

  showPlaces() {
    this.schema = [[]];
    if (!this._selectedOffice) {
      return;
    }
    for (let i = 0; i < this._selectedOffice.sizeX; i++) {
      this.schema[i] = [];
      for (let j = 0; j < this._selectedOffice.sizeY; j++) {
        this.schema[i][j] = {};
      }
    }
    this._places.forEach(place => {
      this.schema[place.coordinateX][place.coordinateY] = { ...place, isPlace: true, isAvailable: !place.username };
    });
  }

  selectPlace(place: Place) {
    this.selectedPlace = place;
  }
}

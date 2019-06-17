import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'src/app/model/Place';
import 'bootstrap/js/dist/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  private _selectedPlace: Place;

  @Input()
  set selectedPlace(place: Place) {
    this._selectedPlace = place;
  }

  constructor() { }

  ngOnInit() {
  }

}

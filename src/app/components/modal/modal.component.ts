import { Component, OnInit, Input } from '@angular/core';
import { Office } from 'src/app/model/Office';
import { Place } from 'src/app/model/Place';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  private _selectedPlace: Place

  @Input()
  set selectedPlace(place: Place) {
    this._selectedPlace = place
  }

  constructor() { }

  ngOnInit() {
  }

}

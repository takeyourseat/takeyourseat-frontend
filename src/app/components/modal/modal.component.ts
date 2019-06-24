import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'src/app/model/Place';
import 'bootstrap/js/dist/modal';
import {PlacerequestService} from '../../service/placerequest.service';
import {PlaceRequests} from '../../model/PlaceRequests';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  private _selectedPlace: Place;
  private placeRequest: PlaceRequests;

  @Input()
  set selectedPlace(place: Place) {
    this._selectedPlace = place;
  }

  constructor(
    private placeRequestService: PlacerequestService

  ) { }

  ngOnInit() {
  }

  createPlaceRequest() {
    this.placeRequestService.createPlaceRequest(this._selectedPlace.id).subscribe(
      response => {
        this.placeRequest = response;
      }
    );
  }
}

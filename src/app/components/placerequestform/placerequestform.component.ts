import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Place} from '../../model/Place';
import {PlacerequestService} from '../../services/placerequest.service';
import {PlaceRequests} from '../../model/PlaceRequests';
import {AlertsComponent} from '../alerts/alerts.component';

@Component({
  selector: 'app-placerequestform',
  templateUrl: './placerequestform.component.html',
  styleUrls: ['./placerequestform.component.css']
})
export class PlacerequestformComponent implements OnInit, OnChanges {

  _selectedPlace: Place;
  placeRequest: PlaceRequests;
  description: string;

  @Input()
  set selectedPlace(place: Place) {
    this._selectedPlace = place;
  }

  constructor(
    private placeRequestService: PlacerequestService
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.description = '';
  }


  createPlaceRequest() {
    this.placeRequestService.createPlaceRequest(this._selectedPlace.id, this.description).subscribe(
      response => {
        this.placeRequest = response;
        AlertsComponent.display('success', 'Place request successfully submitted', 5000);
        this.ngOnChanges();
      },
      error => {
        this.showError(error);
        this.ngOnChanges();
      },
    );
  }

  showError(message) {
    if (message.status === 409) {
      AlertsComponent.display('danger', 'Such place is pending', 5000);
      return;
    }
  }

}

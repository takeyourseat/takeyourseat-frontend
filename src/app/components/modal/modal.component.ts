import {Component, OnInit, Input} from '@angular/core';
import {Place} from 'src/app/model/Place';
import 'bootstrap/js/dist/modal';
import {PlacerequestService} from '../../services/placerequest.service';
import {PlaceRequests} from '../../model/PlaceRequests';
import {AlertsComponent} from '../alerts/alerts.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  public _selectedPlace: Place;
  public placeRequest: PlaceRequests;

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

  createPlaceRequest() {
    this.placeRequestService.createPlaceRequest(this._selectedPlace.id).subscribe(
      response => {
        this.placeRequest = response;
        AlertsComponent.display('success', 'Place request successfully submitted', 5000);
      },
      error => this.showError(error),
    );
  }

  showError(message) {
    if (message.status === 409) {
      AlertsComponent.display('danger', 'Such place is pending', 5000);
      return;
    }
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'src/app/model/Place';
import { PlacerequestService } from '../../services/placerequest.service';
import { PlaceRequests } from '../../model/PlaceRequests';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
    private modal: NgbModal,
    private placeRequestService: PlacerequestService
  ) {
  }

  ngOnInit() {
  }

  createPlaceRequest() {
    this.placeRequestService.createPlaceRequest(this._selectedPlace.id).subscribe(
      response => {
        this.placeRequest = response;
      }
    );
  }

  open() {
    const modalRef = this.modal.open(ModalComponent);
  }
}

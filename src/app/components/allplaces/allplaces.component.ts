import { Component, OnInit } from '@angular/core';
import { OfficeService } from 'src/app/service/office.service';
import { PlaceService } from 'src/app/service/place.service';
import { Office } from 'src/app/model/Office';
import { Place } from 'src/app/model/Place';
import { PlacetableComponent } from '../placetable/placetable.component';

@Component({
  selector: 'app-allplaces',
  templateUrl: './allplaces.component.html',
  styleUrls: ['./allplaces.component.css'],
  providers: [PlacetableComponent],
})
export class AllplacesComponent implements OnInit {

  offices: Office[];
  places: Place[];
  floors: [];
  selectedOffice: Office;

  constructor(
    private officeService: OfficeService,
    private placeService: PlaceService,
  ) { }

  ngOnInit() {
    this.getFloors();
  }

  getFloors() {
    this.officeService.getFloors().subscribe(
      response => {
        this.floors = response;
      }
    )
  }

  getOffices(id) {
    this.officeService.getOfficesByFloor(id).subscribe(
      response => {
        this.offices = response;
      }
    )
  }

  selectOffice(office: Office) {
    this.selectedOffice = office
    this.placeService.getPlacesByOfficeId(office.id).subscribe(
      response => {
        this.places = response;
      }
    )
  }
}

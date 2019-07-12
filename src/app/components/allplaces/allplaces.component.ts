import { Component, OnInit } from '@angular/core';
import { OfficeService } from 'src/app/services/office.service';
import { PlaceService } from 'src/app/services/place.service';
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
  floors: number[];
  selectedOffice: Office;
  selectedPlace: Place;

  constructor(
    private officeService: OfficeService,
    private placeService: PlaceService,
  ) {
  }

  ngOnInit() {
    this.loadFloors();
  }

  loadFloors() {
    this.officeService.getFloors().subscribe(
      response => {
        this.floors = response;
        if(this.floors.length != 0)
          this.loadOffices(this.floors[0])
      }
    );
  }

  loadOffices(id) {
    this.officeService.getOfficesByFloor(id).subscribe(
      response => {
        this.offices = response;
        if(this.offices.length != 0)
          this.selectOffice(this.offices[0])
      }
    );
  }

  selectOffice(office: Office) {
    this.selectedOffice = office;
    this.placeService.getPlacesByOfficeId(office.id).subscribe(
      response => {
        this.places = response;
      }
    );
  }
}

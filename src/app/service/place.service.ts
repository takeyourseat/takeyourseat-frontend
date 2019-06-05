import { Injectable } from '@angular/core';
import { Place } from 'src/app/model/Place';
import { HttpClient } from '@angular/common/http';
import { apiURL } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(
    private http: HttpClient
  ) { }

  getPlacesByOfficeNumber(officenum: number) {
    return this.http.get<Place[]>(apiURL + `offices/${officenum}/places`);
  }

  getPlacesByOfficeId(officeId: number) {
    return this.http.get<Place[]>(apiURL + `offices/${officeId}/places`);
  }
}

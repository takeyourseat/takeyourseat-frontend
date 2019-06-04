import { Injectable } from '@angular/core';
import { Place } from 'src/app/model/Place';
import { HttpClient } from '@angular/common/http';

const endpoint = 'http://localhost:8084/api/';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(
    private http: HttpClient
  ) { }

  getPlacesByOfficeNumber(officenum: number) {
    return this.http.get<Place[]>(endpoint + `offices/${officenum}/places`);
  }

  getPlacesByOfficeId(officeId: number) {
    return this.http.get<Place[]>(endpoint + `offices/${officeId}/places`);
  }
}

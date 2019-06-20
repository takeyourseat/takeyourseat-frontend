import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiURL } from '../constants';
import { PlaceRequests } from '../model/PlaceRequests';

@Injectable({
  providedIn: 'root'
})
export class PlacerequestService {

  constructor(private http: HttpClient) {
  }

  getPlaceRequestsByManager(id: number) {
    return this.http.get<PlaceRequests[]>(apiURL + `requests?manager=${id}`);
  }

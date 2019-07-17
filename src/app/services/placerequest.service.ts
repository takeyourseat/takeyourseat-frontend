import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PLACE_MANAGEMENT_API} from '../constants';
import {PlaceRequests} from '../model/PlaceRequests';

@Injectable({
  providedIn: 'root'
})
export class PlacerequestService {

  constructor(private http: HttpClient) {
  }

  getPlaceRequestsByManager(reviewer: string) {
    return this.http.get<PlaceRequests[]>(PLACE_MANAGEMENT_API + `requests?reviewer=${reviewer}`);
  }

  declinePlaceRequest(id: number) {
    return this.http.put<PlaceRequests>(PLACE_MANAGEMENT_API + `requests/${id}`, {});
  }

  acceptPlaceRequest(id: number) {
    return this.http.patch<PlaceRequests>(PLACE_MANAGEMENT_API + `requests/${id}`, {});
  }

  createPlaceRequest(placeId: number, description: string) {
    return this.http.post<PlaceRequests>(PLACE_MANAGEMENT_API + `requests/${placeId}`, {description});
  }

  getPlaceRequestsByUsername(username: string) {
    return this.http.get <PlaceRequests[]>(PLACE_MANAGEMENT_API + `requests?user=${username}`);
  }
}

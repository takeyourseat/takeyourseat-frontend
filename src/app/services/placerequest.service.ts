import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppConstants} from '../AppConstants';
import {PlaceRequests} from '../model/PlaceRequests';


@Injectable({
  providedIn: 'root'
})
export class PlacerequestService {

  constructor(private http: HttpClient) {
  }

  getPlaceRequestsByManager(reviewer: string) {
    return this.http.get<PlaceRequests[]>(AppConstants.PLACE_MANAGEMENT_API() + `requests?reviewer=${reviewer}`);
  }

  declinePlaceRequest(id: number) {
    return this.http.put<PlaceRequests>(AppConstants.PLACE_MANAGEMENT_API() + `requests/${id}`, {});
  }

  acceptPlaceRequest(id: number) {
    return this.http.patch<PlaceRequests>(AppConstants.PLACE_MANAGEMENT_API() + `requests/${id}`, {});
  }

  createPlaceRequest(placeId: number, description: string) {
    return this.http.post<PlaceRequests>(AppConstants.PLACE_MANAGEMENT_API() + `requests/${placeId}`, {description});
  }

  getPlaceRequestsByUsername(username: string) {
    return this.http.get <PlaceRequests[]>(AppConstants.PLACE_MANAGEMENT_API() + `requests?user=${username}`);
  }
}

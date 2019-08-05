import {Injectable} from '@angular/core';
import {Place} from 'src/app/model/Place';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppConstants} from '../AppConstants';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  constructor(
    private http: HttpClient
  ) {
  }

  getPlacesByOfficeNumber(officenum: number): Observable<Place[]> {
    return this.http.get<Place[]>(AppConstants.PLACE_MANAGEMENT_API() + `offices/${officenum}/places`).pipe(catchError(this.handleError));
  }

  moveUserPlace(officeNumber: number, coordinateX: number, coordinateY: number, place): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http
      .put(AppConstants.PLACE_MANAGEMENT_API() + `places?office=${officeNumber}&coordinateX=${coordinateX}&coordinateY=${coordinateY}`,
        JSON.stringify(place),
        {headers});
  }

  getAvailablePlaces() {
    return this.http.get<Place[]>(AppConstants.PLACE_MANAGEMENT_API() + `places/available`);
  }

  getAvailablePlacesByOfficeNumber(officeNumber: number): Observable<Place[]> {
    return this.http.get<Place[]>(AppConstants.PLACE_MANAGEMENT_API() + `places/available/?office=${officeNumber}`);
  }

  getAllPlaces(): Observable<Place[]> {
    return this.http.get<Place[]>(AppConstants.PLACE_MANAGEMENT_API() + `places`);
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}

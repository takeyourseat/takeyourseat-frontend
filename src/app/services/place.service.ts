import {Injectable} from '@angular/core';
import {Place} from 'src/app/model/Place';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PLACE_MANAGEMENT_API} from 'src/app/constants';
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
    return this.http.get<Place[]>(PLACE_MANAGEMENT_API + `offices/${officenum}/places`).pipe(catchError(this.handleError));
  }

  moveUserPlace(officeNumber: number, coordinateX: number, coordinateY: number, place): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    place = {
      username: 'administrator'
    };
    return this.http
      .put(PLACE_MANAGEMENT_API + `places?office=${officeNumber}&coordinateX=${coordinateX}&coordinateY=${coordinateY}`,
        JSON.stringify(place),
        {headers});
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

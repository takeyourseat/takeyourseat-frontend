import {Injectable} from '@angular/core';
import {Place} from 'src/app/model/Place';
import {HttpClient} from '@angular/common/http';
import {apiURL} from 'src/app/constants';
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
    return this.http.get<Place[]>(apiURL + `offices/${officenum}/places`).pipe(catchError(this.handleError));
  }

  moveUserPlace(officeNumber: number, coordinateX: number, coordinateY: number, place: Place): Observable<Place> {
    return this.http.put<Place>(apiURL + `places?office=${officeNumber}&coordinateX=${coordinateX}&coordinateY=${coordinateY}`, {place});
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

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

  getPlacesByOfficeId(officeId: number): Observable<Place[]> {
    return this.http.get<Place[]>(apiURL + `offices/${officeId}/places`).pipe(catchError(this.handleError));
  }

  getPlaceById(id: number) {
    return this.http.get<Place>(apiURL + `places/${id}`);
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

import {Injectable} from '@angular/core';
import {Office} from 'src/app/model/Office';
import {HttpClient} from '@angular/common/http';
import {PLACE_MANAGEMENT_API} from 'src/app/constants';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  constructor(
    private http: HttpClient
  ) {
  }

  getFloors(): Observable<[]> {
    return this.http.get<[]>(PLACE_MANAGEMENT_API + 'floors').pipe(catchError(this.handleError));
  }

  getOffices(): Observable<Office[]> {
    return this.http.get<Office[]>(PLACE_MANAGEMENT_API + 'offices').pipe(catchError(this.handleError));
  }

  getOfficesByFloor(floor): Observable<Office[]> {
    return this.http.get<Office[]>(PLACE_MANAGEMENT_API + `offices?floor=${floor}`);
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}

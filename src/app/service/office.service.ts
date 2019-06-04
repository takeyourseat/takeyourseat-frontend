import { Injectable } from '@angular/core';
import { Office } from 'src/app/model/Office';
import { HttpClient } from '@angular/common/http';

const endpoint = 'http://localhost:8084/api/';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  constructor(
    private http: HttpClient
  ) { }

  getFloors() {
    return this.http.get<[]>(endpoint + 'floors');
  }

  getOffices() {
    return this.http.get<Office[]>(endpoint + 'offices/');
  }

  getOfficesByFloor(floor) {
    return this.http.get<Office[]>(endpoint + `offices?floor=${floor}`);
  }
}

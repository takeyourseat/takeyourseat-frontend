import { Injectable } from '@angular/core';
import { Office } from 'src/app/model/Office';
import { HttpClient } from '@angular/common/http';
import { apiURL } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  constructor(
    private http: HttpClient
  ) { }

  getFloors() {
    return this.http.get<[]>(apiURL + 'floors');
  }

  getOffices() {
    return this.http.get<Office[]>(apiURL + 'offices/');
  }

  getOfficesByFloor(floor) {
    return this.http.get<Office[]>(apiURL + `offices?floor=${floor}`);
  }
}

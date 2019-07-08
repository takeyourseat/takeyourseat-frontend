import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppConstants} from '../AppConstants';
import {DataType} from '../model/DataType';

@Injectable({
  providedIn: 'root'
})
export class DataTypesService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllDatatypes(): Observable<DataType[]> {
    return this.http.get<DataType[]>(AppConstants.AUTHORIZATION_SERVICE_URL() + 'datatypes');
  }

}

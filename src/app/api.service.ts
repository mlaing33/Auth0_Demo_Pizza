import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as config from '../../auth_config.json';
import { NewOrdersModel } from './models/new-oders-model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }

  ping$(): Observable<any> {
    console.log(config.apiUri);
    return this.http.get(`${config.apiUri}/api/external`);
  }

  getAllOrders$(): Observable<any> {
    return this.http.get(`${config.apiUri}/api/external/orders`)
  }

  addOrders$(model: NewOrdersModel): Observable<any> {
    return this.http.post(`${config.apiUri}/api/external/orders`, JSON.stringify(model));
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private http: HttpClient) {}

  getCountCars(token: any) {
    return this.http.get(environment.baseUrl + '/count_cars', {});
  }
  getAllCars(token: any) {
    return this.http.get(environment.baseUrl + '/count_cars/all_cars', {});
  }
  getAllDisable_cars(token: any) {
    return this.http.get(environment.baseUrl + '/count_cars/disable_cars', {});
  }
  getAll_Cars_Wait_Approve(token: any) {
    return this.http.get(environment.baseUrl + '/cars_wait_approval', {});
  }
  getAllActive_Cars(token: any) {
    return this.http.get(environment.baseUrl + '/count_cars/active_cars', {});
  }
  getAllNot_Pay_Cars(token: any) {
    return this.http.get(environment.baseUrl + '/count_cars/not_pay_cars', {});
  }
}

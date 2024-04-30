import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WaitApprovalService {
  constructor(private http: HttpClient) {}

  waitApprovalCars(token: any) {
    return this.http.get(environment.baseUrl + '/cars_wait_approval', {});
  }

  approveCar(id: number) {
    return this.http.get(environment.baseUrl + `/approve_car/${id}`, {});
  }

  deleteCar(id: number) {
    return this.http.get(environment.baseUrl + `/delete_car/${id}`, {});
  }
}

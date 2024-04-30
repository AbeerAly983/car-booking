import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ChartsService {
  constructor(private http: HttpClient) {}

  subscription(token: any) {
    return this.http.get(environment.baseUrl + '/count_subscription', {});
  }
  MonthlyProfits(token: any) {
    return this.http.get(environment.baseUrl + '/MonthlyProfits', {});
  }
  AnnualProfits(token: any) {
    return this.http.get(environment.baseUrl + '/AnnualProfits', {});
  }
  users_added_this_year(token: any) {
    return this.http.get(environment.baseUrl + '/users_added_this_year', {});
  }
}

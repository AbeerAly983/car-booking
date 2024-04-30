import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  constructor(private http: HttpClient) {}

  getCountAllSubscription(token: any) {
    return this.http.get(environment.baseUrl + '/count_subscription', {});
  }

  getAllSubscription(token: any) {
    return this.http.get(
      environment.baseUrl + '/count_subscription/all_subscription',
      {}
    );
  }

  getAllSubscriptionThisMonth(token: any) {
    return this.http.get(
      environment.baseUrl + '/count_subscription/one_month_subscription',
      {}
    );
  }
  getAllSubscriptionLastThreeMonth(token: any) {
    return this.http.get(
      environment.baseUrl + '/count_subscription/three_month_subscription',
      {}
    );
  }
  getAllSubscriptionThisYear(token: any) {
    return this.http.get(
      environment.baseUrl + '/count_subscription/one_year_subscription',
      {}
    );
  }
}

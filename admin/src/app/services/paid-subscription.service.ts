import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PaidSubscriptionService {
  constructor(private http: HttpClient) {}

  getCountOfPaidSub(token: any) {
    return this.http.get(environment.baseUrl + '/num_subscription_paid', {});
  }

  getAllPaidSub(token: any) {
    return this.http.get(
      environment.baseUrl + '/num_subscription_paid/all_subscription_paid',
      {}
    );
  }

  getAllPaidSubscriptionThisDay(token: any) {
    return this.http.get(
      environment.baseUrl + '/num_subscription_paid/subscription_paid_today',
      {}
    );
  }
  getAllPaidSubscriptionThisMonth(token: any) {
    return this.http.get(
      environment.baseUrl +
        '/num_subscription_paid/subscription_paid_this_month',
      {}
    );
  }
  getAllPaidSubscriptionThisYear(token: any) {
    return this.http.get(
      environment.baseUrl +
        '/num_subscription_paid/subscription_paid_this_year',
      {}
    );
  }
  getProfitSubscription(token: any) {
    return this.http.get(environment.baseUrl + '/sum_subscription', {});
  }
}

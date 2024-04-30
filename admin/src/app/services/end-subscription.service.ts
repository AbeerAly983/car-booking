import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EndSubscriptionService {
  constructor(private http: HttpClient) {}

  getCountOfEndSub(token: any) {
    return this.http.get(environment.baseUrl + '/end_subscription', {});
  }

  // getAllEndSub(token: any) {
  //   return this.http.get(
  //     environment.baseUrl + '/num_subscription_paid/all_subscription_paid',
  //     {}
  //   );
  // }

  getAllEndSubscriptionThisDay(token: any) {
    return this.http.get(
      environment.baseUrl + '/end_subscription/subscription_end_today',
      {}
    );
  }
  getAllEndSubscriptionThisMonth(token: any) {
    return this.http.get(
      environment.baseUrl + '/end_subscription/subscription_end_this_month',
      {}
    );
  }
  // getAllPaidSubscriptionThisYear(token: any) {
  //   return this.http.get(
  //     environment.baseUrl +
  //       '/num_subscription_paid/subscription_paid_this_year',
  //     {}
  //   );
  // }
}

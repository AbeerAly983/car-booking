import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  Count_Paid_Subscription,
  Subscription,
  Subscription_Profit,
} from 'src/app/interfaces/subscription';
import { PaidSubscriptionService } from 'src/app/services/paid-subscription.service';

@Component({
  selector: 'app-paid-subscription',
  templateUrl: './paid-subscription.component.html',
  styleUrls: [
    './paid-subscription.component.css',
    '../user/user.component.css',
  ],
})
export class PaidSubscriptionComponent {
  activeDiv: string = 'AllPaidSub'; // Variable used to active div
  countOfAllPaidSub?: Count_Paid_Subscription;
  AllPaidSubscription: Subscription[] = [];
  AllPaidLength: number | undefined;
  AllPidSubscriptionToday: Subscription[] = [];
  AllPidSubscriptionThisMonth: Subscription[] = [];
  AllPaidSubscriptionThisYear: Subscription[] = [];
  profit?: Subscription_Profit;
  AllPaidSub: boolean = true;
  AllPaidSubToday: boolean = false;
  AllPaidSubThisMonth: boolean = false;
  AllPaidSubThisYear: boolean = false;
  showBack: boolean = false;
  constructor(
    private service: PaidSubscriptionService,
    private router: Router
  ) {
    if (!localStorage.getItem('access_token')) {
      this.router.navigate(['/login']);
    }
  }
  ngOnInit(): void {
    this.getCountOfAllPaidSub();
    this.getAllPaidSub();
    this.getAllSubscriptionThisDay();
    this.getAllPAidSubscriptionThisMonth();
    this.getAllPaidSubscriptionThisYear();
    this.getProfit();
  }
  getCountOfAllPaidSub() {
    const token = localStorage.getItem('access_token');
    this.service.getCountOfPaidSub(token).subscribe(
      (response: any) => {
        console.log(response);
        this.countOfAllPaidSub = response;
      },
      (error) => {
        if (error.status == 401) {
          this.router.navigate(['/login']);
        }
      }
    );
  }
  getAllPaidSub() {
    const token = localStorage.getItem('access_token');
    this.service.getAllPaidSub(token).subscribe(
      (response: any) => {
        this.AllPaidSubscription = response;
        this.AllPaidLength = this.AllPaidSubscription.length;
      },
      (error) => {
        if (error.status == 401) {
          this.router.navigate(['/login']);
        }
      }
    );
  }
  getAllSubscriptionThisDay() {
    const token = localStorage.getItem('access_token');
    this.service.getAllPaidSubscriptionThisDay(token).subscribe(
      (response: any) => {
        this.AllPidSubscriptionToday = response;
      },
      (error) => {
        if (error.status == 401) {
          this.router.navigate(['/login']);
        }
      }
    );
  }
  getAllPAidSubscriptionThisMonth() {
    const token = localStorage.getItem('access_token');
    this.service.getAllPaidSubscriptionThisMonth(token).subscribe(
      (response: any) => {
        this.AllPidSubscriptionThisMonth = response;
      },
      (error) => {
        if (error.status == 401) {
          this.router.navigate(['/login']);
        }
      }
    );
  }
  getAllPaidSubscriptionThisYear() {
    const token = localStorage.getItem('access_token');
    this.service.getAllPaidSubscriptionThisYear(token).subscribe(
      (response: any) => {
        this.AllPaidSubscriptionThisYear = response;
        console.log(response);
      },
      (error) => {
        if (error.status == 401) {
          this.router.navigate(['/login']);
        }
      }
    );
  }
  getProfit() {
    const token = localStorage.getItem('access_token');
    this.service.getProfitSubscription(token).subscribe(
      (response: any) => {
        this.profit = response;
        console.log(response);
      },
      (error) => {
        if (error.status == 401) {
          this.router.navigate(['/login']);
        }
      }
    );
  }

  // show table of role
  showAllPaidSub() {
    this.AllPaidSub = true;
    this.AllPaidSubToday = false;
    this.AllPaidSubThisMonth = false;
    this.AllPaidSubThisYear = false;
    this.showBack = true;
  }
  // show table of all users
  showAllPaidSubToday() {
    this.AllPaidSubToday = true;
    this.AllPaidSub = false;
    this.AllPaidSubThisMonth = false;
    this.AllPaidSubThisYear = false;
    this.showBack = true;
  }
  // show table of company
  showAllPaidSubThisMonth() {
    this.AllPaidSub = false;
    this.AllPaidSubToday = false;
    this.AllPaidSubThisMonth = true;
    this.AllPaidSubThisYear = false;
    this.showBack = true;
  }
  showAllPaidSubThisYear() {
    this.AllPaidSub = false;
    this.AllPaidSubToday = false;
    this.AllPaidSubThisMonth = false;
    this.AllPaidSubThisYear = true;
    this.showBack = true;
  }
  setActiveDiv(div: string) {
    this.activeDiv = div;
  }
}

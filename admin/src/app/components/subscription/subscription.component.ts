import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  Count_Subscription,
  Subscription,
} from 'src/app/interfaces/subscription';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css', '../user/user.component.css'],
})
export class SubscriptionComponent {
  activeDiv: string = 'AllSub'; // Variable used to active div
  countOfAllSub?: Count_Subscription;
  AllSubscription: Subscription[] = [];
  AllSubscriptionThisMonth: Subscription[] = [];
  AllSubscriptionLastThreeMonth: Subscription[] = [];
  AllSubscriptionThisYear: Subscription[] = [];
  AllSub: boolean = true;
  AllSubThisMonth: boolean = false;
  AllSubThreeMonth: boolean = false;
  AllSubThisYear: boolean = false;
  showBack: boolean = false;

  constructor(private service: SubscriptionService, private router: Router) {
    if (!localStorage.getItem('access_token')) {
      this.router.navigate(['/login']);
    }
  }
  ngOnInit(): void {
    this.getCountOfAllSub();
    this.getAllSubscription();
    this.getAllSubscriptionThisMonth();
    this.getAllSubscriptionLastThreeMonth();
    this.getAllSubscriptionThisYear();
  }

  getCountOfAllSub() {
    const token = localStorage.getItem('access_token');
    this.service.getCountAllSubscription(token).subscribe(
      (response: any) => {
        this.countOfAllSub = response;
      },
      (error) => {
        if (error.status == 401) {
          this.router.navigate(['/login']);
        }
      }
    );
  }
  getAllSubscription() {
    const token = localStorage.getItem('access_token');
    this.service.getAllSubscription(token).subscribe(
      (response: any) => {
        this.AllSubscription = response;
      },
      (error) => {
        if (error.status == 401) {
          this.router.navigate(['/login']);
        }
      }
    );
  }

  getAllSubscriptionThisMonth() {
    const token = localStorage.getItem('access_token');
    this.service.getAllSubscriptionThisMonth(token).subscribe(
      (response: any) => {
        this.AllSubscriptionThisMonth = response;
      },
      (error) => {
        if (error.status == 401) {
          this.router.navigate(['/login']);
        }
      }
    );
  }
  getAllSubscriptionLastThreeMonth() {
    const token = localStorage.getItem('access_token');
    this.service.getAllSubscriptionLastThreeMonth(token).subscribe(
      (response: any) => {
        this.AllSubscriptionLastThreeMonth = response;
      },
      (error) => {
        if (error.status == 401) {
          this.router.navigate(['/login']);
        }
      }
    );
  }

  getAllSubscriptionThisYear() {
    const token = localStorage.getItem('access_token');
    this.service.getAllSubscriptionThisYear(token).subscribe(
      (response: any) => {
        this.AllSubscriptionThisYear = response;
      },
      (error) => {
        if (error.status == 401) {
          this.router.navigate(['/login']);
        }
      }
    );
  }

  // show table of role
  showAllSub() {
    this.AllSub = true;
    this.AllSubThisMonth = false;
    this.AllSubThreeMonth = false;
    this.AllSubThisYear = false;
    this.showBack = true;
  }
  // show table of all users
  showAllSubThisMonth() {
    this.AllSubThisMonth = true;
    this.AllSub = false;
    this.AllSubThreeMonth = false;
    this.AllSubThisYear = false;
    this.showBack = true;
  }
  // show table of company
  showAllSubThreeMonth() {
    this.AllSub = false;
    this.AllSubThisMonth = false;
    this.AllSubThreeMonth = true;
    this.AllSubThisYear = false;
    this.showBack = true;
  }
  showAllSubThisYear() {
    this.AllSub = false;
    this.AllSubThisMonth = false;
    this.AllSubThreeMonth = false;
    this.AllSubThisYear = true;
    this.showBack = true;
  }

  setActiveDiv(div: string) {
    this.activeDiv = div;
  }
}

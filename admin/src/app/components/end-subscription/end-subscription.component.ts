import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  Count_End_Subscription,
  Subscription,
} from 'src/app/interfaces/subscription';
import { EndSubscriptionService } from 'src/app/services/end-subscription.service';

@Component({
  selector: 'app-end-subscription',
  templateUrl: './end-subscription.component.html',
  styleUrls: ['./end-subscription.component.css', '../user/user.component.css'],
})
export class EndSubscriptionComponent {
  activeDiv: string = 'AllEndSubThisDay'; // Variable used to active div
  countOfEndSub?: Count_End_Subscription;
  //AllSubscription: Subscription[] = [];
  AllEndSubscriptionThisMonth: Subscription[] = [];
  AllEndSubscriptionThisDay: Subscription[] = [];
  //AllSubscriptionThisYear: Subscription[] = [];
  AllEndSub: boolean = false;
  AllEndSubThisMonth: boolean = false;
  AllEndSubThisDay: boolean = true;
  //AllSubThisYear: boolean = false;
  showBack: boolean = false;

  constructor(private service: EndSubscriptionService, private router: Router) {
    if (!localStorage.getItem('access_token')) {
      this.router.navigate(['/login']);
    }
  }
  ngOnInit(): void {
    this.getCountOfEndSub();
    //this.getAllSubscription();
    this.getAllEndSubscriptionThisMonth();
    this.getAllEndsubscriptionToday();
    //this.getAllSubscriptionThisYear();
  }

  getCountOfEndSub() {
    const token = localStorage.getItem('access_token');
    this.service.getCountOfEndSub(token).subscribe(
      (response: any) => {
        this.countOfEndSub = response;
      },
      (error) => {
        if (error.status == 401) {
          this.router.navigate(['/login']);
        }
      }
    );
  }
  // getAllSubscription() {
  //   const token = localStorage.getItem('access_token');
  //   this.service.getAllSubscription(token).subscribe(
  //     (response: any) => {
  //       this.AllSubscription = response;
  //     },
  //     (error) => {
  //       if (error.status == 401) {
  //         this.router.navigate(['/login']);
  //       }
  //     }
  //   );
  // }

  getAllEndSubscriptionThisMonth() {
    const token = localStorage.getItem('access_token');
    this.service.getAllEndSubscriptionThisMonth(token).subscribe(
      (response: any) => {
        this.AllEndSubscriptionThisMonth = response;
      },
      (error) => {
        if (error.status == 401) {
          this.router.navigate(['/login']);
        }
      }
    );
  }
  getAllEndsubscriptionToday() {
    const token = localStorage.getItem('access_token');
    this.service.getAllEndSubscriptionThisDay(token).subscribe(
      (response: any) => {
        this.AllEndSubscriptionThisDay = response;
      },
      (error) => {
        if (error.status == 401) {
          this.router.navigate(['/login']);
        }
      }
    );
  }

  // getAllSubscriptionThisYear() {
  //   const token = localStorage.getItem('access_token');
  //   this.service.getAllSubscriptionThisYear(token).subscribe(
  //     (response: any) => {
  //       this.AllSubscriptionThisYear = response;
  //     },
  //     (error) => {
  //       if (error.status == 401) {
  //         this.router.navigate(['/login']);
  //       }
  //     }
  //   );
  // }

  // show table of role
  // showAllSub() {
  //   this.AllEndSub = true;
  //   this.AllSubThisMonth = false;
  //   this.AllSubThreeMonth = false;
  //   this.AllSubThisYear = false;
  //   this.showBack = true;
  // }
  // show table of all users
  showAllEndSubThisMonth() {
    this.AllEndSubThisMonth = true;
    //this.AllEndSub = false;
    this.AllEndSubThisDay = false;
    //this.AllSubThisYear = false;
    this.showBack = true;
  }
  // show table of company
  showAllEndSubThisDay() {
    this.AllEndSub = false;
    this.AllEndSubThisMonth = false;
    this.AllEndSubThisDay = true;
    //this.AllSubThisYear = false;
    this.showBack = true;
  }
  // showAllSubThisYear() {
  //   this.AllEndSub = false;
  //   this.AllSubThisMonth = false;
  //   this.AllSubThreeMonth = false;
  //   this.AllSubThisYear = true;
  //   this.showBack = true;
  // }

  setActiveDiv(div: string) {
    this.activeDiv = div;
  }
}

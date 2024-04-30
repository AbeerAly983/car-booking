import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Car, Wait_Approval_Car } from 'src/app/interfaces/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.css', '../user/user.component.css'],
})
export class AllCarsComponent {
  activeDiv: string = 'showAllCars'; // Variable used to active div
  countCars?: Car;
  len?: number;
  AllCars: any[] = [];
  All_Disable_car: any[] = [];
  All_Cars_Wait_Approve: Wait_Approval_Car[] = [];
  All_Active_Cars: any[] = [];
  All_Not_Pay_Cars: any[] = [];
  showAllCars: boolean = true;
  showDisableCar: boolean = false;
  showWaitCars: boolean = false;
  showActiveCars: boolean = false;
  showNotPayCars: boolean = false;
  showBack: boolean = false;

  constructor(private service: CarService, private router: Router) {
    if (!localStorage.getItem('access_token')) {
      this.router.navigate(['/login']);
    }
  }
  ngOnInit(): void {
    this.getCountCars();
    this.getAllCars();
    this.getAll_Active_Cars();
    this.getAll_Cars_Wait_Approve();
    this.getAll_Disable_car();
    this.getAll_Not_Pay_Cars();
  }

  // get number of all users in system
  getCountCars() {
    const token = localStorage.getItem('access_token');
    this.service.getCountCars(token).subscribe(
      (response: any) => {
        this.countCars = response;
      },
      (error) => {
        if (error.status == 401) {
          this.router.navigate(['/login']);
        }
      }
    );
  }
  getAllCars() {
    const token = localStorage.getItem('access_token');
    this.service.getAllCars(token).subscribe(
      (response: any) => {
        this.AllCars = response;
      },
      (error) => {
        if (error.status == 401) {
          this.router.navigate(['/login']);
        }
      }
    );
  }
  getAll_Disable_car() {
    const token = localStorage.getItem('access_token');
    this.service.getAllDisable_cars(token).subscribe(
      (response: any) => {
        this.All_Disable_car = response;
      },
      (error) => {
        if (error.status == 401) {
          this.router.navigate(['/login']);
        }
      }
    );
  }
  getAll_Cars_Wait_Approve() {
    const token = localStorage.getItem('access_token');
    this.service.getAll_Cars_Wait_Approve(token).subscribe(
      (response: any) => {
        this.All_Cars_Wait_Approve = response;
        this.len = this.All_Cars_Wait_Approve.length;
      },
      (error) => {
        if (error.status == 401) {
          this.router.navigate(['/login']);
        }
      }
    );
  }
  getAll_Active_Cars() {
    const token = localStorage.getItem('access_token');
    this.service.getAllActive_Cars(token).subscribe(
      (response: any) => {
        this.All_Active_Cars = response;
      },
      (error) => {
        if (error.status == 401) {
          this.router.navigate(['/login']);
        }
      }
    );
  }
  getAll_Not_Pay_Cars() {
    const token = localStorage.getItem('access_token');
    this.service.getAllNot_Pay_Cars(token).subscribe(
      (response: any) => {
        this.All_Not_Pay_Cars = response;
      },
      (error) => {
        if (error.status == 401) {
          this.router.navigate(['/login']);
        }
      }
    );
  }

  // show table of role
  showCars() {
    this.showAllCars = true;
    this.showDisableCar = false;
    this.showWaitCars = false;
    this.showActiveCars = false;
    this.showNotPayCars = false;
    this.showBack = true;
  }
  // show table of all users
  showDisable() {
    this.showAllCars = false;
    this.showDisableCar = true;
    this.showWaitCars = false;
    this.showActiveCars = false;
    this.showNotPayCars = false;
    this.showBack = true;
  }
  // show table of company
  showWait() {
    this.showAllCars = false;
    this.showDisableCar = false;
    this.showWaitCars = true;
    this.showActiveCars = false;
    this.showNotPayCars = false;
    this.showBack = true;
  }
  showActive() {
    this.showAllCars = false;
    this.showDisableCar = false;
    this.showWaitCars = false;
    this.showActiveCars = true;
    this.showNotPayCars = false;
    this.showBack = true;
  }
  showNotPay() {
    this.showAllCars = false;
    this.showDisableCar = false;
    this.showWaitCars = false;
    this.showActiveCars = false;
    this.showNotPayCars = true;
    this.showBack = true;
  }

  setActiveDiv(div: string) {
    this.activeDiv = div;
  }
}

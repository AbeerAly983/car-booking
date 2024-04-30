import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Wait_And_Rent_Cars } from 'src/app/interfaces/car';
import { ProfileCarService } from 'src/app/services/profileCar.service';

@Component( {
  selector: 'app-required-cars',
  templateUrl: './required-cars.component.html',
  styleUrls: [
    './required-cars.component.css',
    '../my-cars/my-cars.component.css',
  ],
} )
export class RequiredCarsComponent {
  waitCars: Wait_And_Rent_Cars[] = [];
  responseMsg: any;
  constructor( private service: ProfileCarService, private router: Router ) {
  }

  ngOnInit(): void {
    this.getWaitCars();
  }

  getWaitCars() {
    this.service.waitCars().subscribe(
      ( response: any ) => {
        this.waitCars = response;
      },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
          localStorage.removeItem( 'access_token' );
        }
      }
    );
  }
}

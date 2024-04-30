import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Wait_And_Rent_Cars } from 'src/app/interfaces/car';
import { ProfileCarService } from 'src/app/services/profileCar.service';

@Component( {
  selector: 'app-reserved-cars',
  templateUrl: './reserved-cars.component.html',
  styleUrls: [
    './reserved-cars.component.css',
    '../my-cars/my-cars.component.css',
  ],
} )
export class ReservedCarsComponent {
  rentCars: Wait_And_Rent_Cars[] = [];
  responseMsg: any;
  constructor( private service: ProfileCarService, private router: Router ) {
  }

  ngOnInit(): void {
    this.getRentCars();
  }

  getRentCars() {
    this.service.rentCars().subscribe(
      ( response: any ) => {
        this.rentCars = response;

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

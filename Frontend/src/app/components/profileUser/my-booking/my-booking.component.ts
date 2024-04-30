import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookCar } from 'src/app/interfaces/car';
import { ProfileCarService } from 'src/app/services/profileCar.service';

@Component( {
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.css', '../my-cars/my-cars.component.css'],
} )
export class MyBookingComponent {
  userBookingCars: BookCar[] = [];
  constructor( private service: ProfileCarService, private router: Router ) {
  }

  ngOnInit(): void {
    this.getBookingCars();
  }

  getBookingCars() {
    this.service.userBookingCars().subscribe(
      ( response: any ) => {
        this.userBookingCars = response;
      },
      ( error ) => {
        if ( error.status == 401 ) {
          localStorage.removeItem( 'access_token' );
          this.router.navigate( ['/login'] );
        }
      }
    );
  }


}

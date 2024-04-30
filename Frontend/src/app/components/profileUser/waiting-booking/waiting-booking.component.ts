import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookCar } from 'src/app/interfaces/car';
import { ProfileCarService } from 'src/app/services/profileCar.service';

@Component( {
  selector: 'app-waiting-booking',
  templateUrl: './waiting-booking.component.html',
  styleUrls: ['./waiting-booking.component.css', '../my-cars/my-cars.component.css']
} )
export class WaitingBookingComponent {
  pending: BookCar[] = [];
  responseMsg: any;
  constructor( private service: ProfileCarService, private router: Router ) {
  }

  ngOnInit(): void {
    this.getBookingCars();
  }

  getBookingCars() {
    this.service.pendingBooking().subscribe(
      ( response: any ) => {
        this.pending = response;
      },
      ( error ) => {
        if ( error.status == 401 ) {
          localStorage.removeItem( 'access_token' );
          this.router.navigate( ['/login'] );
        }
      }
    );
  }

  dropBooking( id: number ) {
    this.service.deleteUserBookingCars( id ).subscribe(
      ( response ) => {
        this.responseMsg = response;
        if ( this.responseMsg.message == 'Deleted Successfully' ) {
          this.getBookingCars();
        }
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

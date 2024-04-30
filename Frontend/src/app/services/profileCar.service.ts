import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PaymentInfo } from '../interfaces/car';
import { Profile} from '../interfaces/User';

@Injectable( {
  providedIn: 'root',
} )
export class ProfileCarService {
  constructor( private http: HttpClient ) { }

  // profile info
  userProfile() {
    return this.http.get( environment.baseUrl + '/profile' );
  }
  changePassword( data: Profile ) {
    return this.http.post( environment.baseUrl + '/change_user_password', data );
  }
  changeEmail( data: Profile ) {
    return this.http.post( environment.baseUrl + '/update_user', data )
  }

  // add car
  addCar( data: FormData ) {
    return this.http.post( environment.baseUrl + '/addCar', data );
  }

  // myCars
  getUserCars() {
    return this.http.get( environment.baseUrl + '/user_cars' );
  }
  enableOrDisableCar( id: number ) {
    return this.http.get( environment.baseUrl + `/disable/${id}` );
  }

  // payment 
  makePayment( data: PaymentInfo ) {
    return this.http.post( environment.baseUrl + '/makePayment', data )
  }

  // edit car
  getCarById( id: number ) {
    return this.http.get( environment.baseUrl + `/cars/edit/${id}` );
  }
  editCar( id: number, car: FormData ) {
    return this.http.post( environment.baseUrl + `/cars/update/${id}`, car );
  }
  deletePhoto( id: number) {
    return this.http.get( environment.baseUrl + `/delete_photo/${id}`);
  }

  // required cars
  waitCars() {
    return this.http.get( environment.baseUrl + '/wait' );
  }

  // requests info
  getCarWaitApproval( id: number ) {
    return this.http.get( environment.baseUrl + `/list_request_wait_approval/${id}` );
  }
  acceptRequest( id: number ) {
    return this.http.get( environment.baseUrl + `/accept_rent/${id}` );
  }
  deleteRequest( id: number ) {
    return this.http.get( environment.baseUrl + `/delete_request/${id}` );
  }

  // reserved cars
  rentCars() {
    return this.http.get( environment.baseUrl + '/rent' );
  }

  // reservation info
  detailsOfRentCars( id: number ) {
    return this.http.get( environment.baseUrl + `/list_car_rent/${id}` );
  }
  deleteRent( id: number ) {
    return this.http.get( environment.baseUrl + `/delete_rent/${id}` );
  }

  // myBooking
  userBookingCars() {
    return this.http.get( environment.baseUrl + `/MyBooking` );
  }

  // pending booking
  pendingBooking() {
    return this.http.get( environment.baseUrl + `/MyBooking_wait_approve` );
  }
  deleteUserBookingCars( id: number ) {
    return this.http.get( environment.baseUrl + `/delete_request/${id}` );
  }

}

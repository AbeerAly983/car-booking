import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { BookCar} from '../interfaces/car';
import { catchError, tap } from 'rxjs/operators';



@Injectable( {
  providedIn: 'root'
} )
export class CarService{

  constructor( private http: HttpClient) {
  }

  showCars() {
    return this.http.get( environment.baseUrl + '/cars' );
  }

  getCars(page: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const url = `${environment.baseUrl}/cars?page=${page}`;
  
    return this.http.get( url, { headers } );
  }

  getCompanyCars( page: number ) {
    const url = `${environment.baseUrl}/companies_car?page=${page}`;
    return this.http.get( url );
  }

  getPersonCars( page: number ) {
    const url = `${environment.baseUrl}/users_car?page=${page}`;
    return this.http.get( url );
  }

  getCarDetails( id: number ) {
    const url = `${environment.baseUrl}/carDetails/${id}`;
    return this.http.get( url );
  }

  bookCar( data: BookCar ) {
    return this.http.post( environment.baseUrl + '/rent_car', data )
  }

  getFilterValue() {
    return this.http.get( environment.baseUrl + '/value' )
  }

}

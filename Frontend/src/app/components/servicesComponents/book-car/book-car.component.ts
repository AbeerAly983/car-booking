import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BookCar, Car } from 'src/app/interfaces/car';
import { CarService } from 'src/app/services/car.service';
import { ProfileCarService } from 'src/app/services/profileCar.service';
import { User } from './../../../interfaces/User';

@Component( {
  selector: 'app-book-car',
  templateUrl: './book-car.component.html',
  styleUrls: ['./book-car.component.css']
} )
export class BookCarComponent {
  carDetails?: Car;
  id = 0;
  userData: any;
  msgAlert: string = '';
  valid: boolean = false;  // alert
  today: string = ''; // validation input date to start now date
  data: BookCar; // to show total price and No.day 
  disabledDates: string[] = [];


  constructor( private _carService: CarService, private _ProfileCarService: ProfileCarService , private _activeRouter: ActivatedRoute, private _router: Router ) {
  }

  ngOnInit(): void {
    this._activeRouter.paramMap.subscribe( ( params: ParamMap ) => {
      this.id = +params.get( 'id' )!;
      this.getCarDetails();
    } );
    // to get now date to put calender
    this.today = new Date().toISOString().split( 'T' )[0];
    
    this.getDataProfile();
  }


  getCarDetails() {
    this._carService.getCarDetails( this.id ).subscribe( ( response: any ) => {
      this.carDetails = response.details.pop() as Car;
      this.disabledDates = response.dates;
    }, ( error: any ) => {
      console.error( 'Error fetching car details:', error );
    } );
  }


  // to show total price and No.day
  checkBook( carData: BookCar ) {
    const startDate = new Date( carData.start_date );
    const endDate = new Date( carData.end_date );
    
    // Calculate the difference in days
    const timeDifference = Math.abs( endDate.getTime() - startDate.getTime() );
    const numDays = Math.ceil( timeDifference / ( 1000 * 3600 * 24 ) );
    carData.num_days = numDays;
    carData.total_price = numDays * this.carDetails!.price_rent;
    this.data = carData;
  }


  onSubmit(data:BookCar) {
    if ( this.userData.roles[0].name == 'company' ) {
      this.msgAlert = "The company cannot book cars";
      this.valid = true;
      setTimeout( () => {
        this.valid = false;
      }, 2500 );
    }
    
    else {
      this.data.user_id = this.userData.id;
      this.data.car_id = this.carDetails!.id;
      this._carService.bookCar(this.data).subscribe( {
        next: ( response: any ) => {
          console.log(response);
          
          this.msgAlert = "Your booking is pending.";
          this.valid = true;
          
          setTimeout( () => {
            this.valid = false;
          }, 2500 );

        },
        error: ( error: any ) => {
          console.log( error );
          if ( error.status === 401 ) {
            this._router.navigate( ['/login'] );
            localStorage.removeItem( 'access_token' );
            
          } else {
            console.log( 'An error occurred:', error.message );
          }
        }
      } );
    }
  }


  // when put in url id not exist
  foundData(): boolean {
    return this.carDetails !== undefined;
  }


  disableSpecificDates( event: Event ) {
    const input = event.target as HTMLInputElement;
    const selectedDate = input.value;
    if ( this.disabledDates.includes( selectedDate ) ) {
      input.value = '';
      this.msgAlert = "Sorry!, This Date Taken";
      this.valid = true;
      setTimeout( () => {
        this.valid = false;
      }, 2500 );
    }
  }


  // company can't book car or see booking, pending in sidebar
  getDataProfile() {
    this._ProfileCarService.userProfile().subscribe(
      ( data: any ) => {
        this.userData = data;
        console.log(this.userData);
        
      },
      ( error ) => {
        if ( error.status == 401 ) {
          this._router.navigate( ['/login'] );
          localStorage.removeItem( 'access_token' );
          
        }
      }
    );
  }
}
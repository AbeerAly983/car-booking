import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Wait_And_Rent_Approval } from 'src/app/interfaces/car';
import { ProfileCarService } from 'src/app/services/profileCar.service';

@Component( {
  selector: 'app-list-car-rent',
  templateUrl: './list-car-rent.component.html',
  styleUrls: [
    './list-car-rent.component.css',
    '../../my-cars/my-cars.component.css',
  ],
} )
export class ListCarRentComponent {
  carRent: Wait_And_Rent_Approval[] = [];
  id: number = 0;
  responseMsg: any;
  valid: boolean = false;
  added: boolean = false;
  idCheckAlert: number | undefined;
  constructor(
    private service: ProfileCarService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const idParam = this.route.snapshot.paramMap.get( 'id' );
    this.id = Number( idParam );
  }

  ngOnInit(): void {
    this.getListCarRent();
  }

  getListCarRent() {
    this.service.detailsOfRentCars( this.id ).subscribe(
      ( response: any ) => {
        this.carRent = response;
      },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
          localStorage.removeItem( 'access_token' );
        }
      }
    );
  }

  deleteRent( id: number ) {
    this.service.deleteRent( id ).subscribe(
      ( response ) => {
        this.responseMsg = response;
        if ( this.responseMsg.message == 'Deleted Successfully' ) {
          this.valid = false;
          this.getListCarRent();
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

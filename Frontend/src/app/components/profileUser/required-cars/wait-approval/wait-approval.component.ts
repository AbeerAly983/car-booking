import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Wait_And_Rent_Approval } from 'src/app/interfaces/car';
import { ProfileCarService } from 'src/app/services/profileCar.service';

@Component( {
  selector: 'app-wait-approval',
  templateUrl: './wait-approval.component.html',
  styleUrls: [
    './wait-approval.component.css',
    '../../my-cars/my-cars.component.css',
  ],
} )
export class WaitApprovalComponent {
  carRequests: Wait_And_Rent_Approval[] = [];
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
    this.getCarsWaitApproval();
  }

  getCarsWaitApproval() {
    this.service.getCarWaitApproval( this.id ).subscribe(
      ( response: any ) => {
        this.carRequests = response;
      },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
          localStorage.removeItem( 'access_token' );
        }
      }
    );
  }

  acceptRequest( id: number ) {
    this.service.acceptRequest( id ).subscribe(
      ( response ) => {
        this.responseMsg = response;
        if ( this.responseMsg.message == 'Rent Completed Successfully' ) {
          this.added = true;
          setTimeout( () => {
            this.added = false;
            this.getCarsWaitApproval();
          }, 2500 );
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

  deleteRequest( id: number ) {
    this.service.deleteRequest( id ).subscribe(
      ( response ) => {
        this.responseMsg = response;
        if ( this.responseMsg.message == 'Deleted Successfully' ) {
          this.valid = false;
          this.getCarsWaitApproval();
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

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Car, PaymentInfo } from 'src/app/interfaces/car';
import { ProfileCarService } from 'src/app/services/profileCar.service';
import { loadStripe, Stripe, StripeCardElement } from '@stripe/stripe-js';

@Component( {
  selector: 'app-my-cars',
  templateUrl: './my-cars.component.html',
  styleUrls: ['./my-cars.component.css'],
} )
export class MyCarsComponent {
  userCars: Car[] = [];
  responseMsg: any;
  searchText: string = '';
  carForm: Car;

  
  stripe: Stripe | any;
  cardElement: StripeCardElement | any;
  // to get price and time of plan
  pricePlan: string = '';
  timePlan: string = '';

  showAlertSelectPlan: boolean = false;
  selectPlanMsg: string = '';
  paymentSuccess: boolean = false;
  paymentError: boolean = false;
  constructor( private service: ProfileCarService, private router: Router ) {
  }


  getCars() {
    this.service.getUserCars().subscribe(
      ( response: any ) => {
        this.userCars = response;
      },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
          localStorage.removeItem( 'access_token' );
        }
      }
    );
  }

  enableOrDisable( id: number ) {
    this.service.enableOrDisableCar( id ).subscribe(
      ( response ) => {
        this.responseMsg = response;
        if ( this.responseMsg.sucess == true ) {
          this.getCars();
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

  searchCar(): void {
    if ( this.searchText !== '' ) {
      this.userCars = this.userCars.filter( ( ele ) =>
        ele.type.toLowerCase().includes( this.searchText.toLowerCase() )
      );
    } else {
      this.getCars();
    }
  }


  
  async ngOnInit() {
    this.getCars();
    this.stripe = await loadStripe( 'pk_test_51NyMMdFYWw2mffJ4fjNaJj1jtfKZIjuRXrKHTOvq4zkLn0ue3uZbElA9mzsEWnnMfz6z42OKau9DpnVrBigNrKvr002w5a729m' );
    const elements = this.stripe.elements();
    this.cardElement = elements.create( 'card' );
    this.cardElement.mount( '#card-element' );
  }

  async onSubmitPayment( data: Car ) {
    const { error, paymentMethod } = await this.stripe.createPaymentMethod( {
      type: 'card',
      card: this.cardElement,
    } );
    if ( error ) {
      console.error( error );
      this.paymentError = true;
      setTimeout( () => {
        this.paymentError = false;
      }, 2500 );
    } else {
      // Send the paymentMethod.id to your server for further processing
      this.sendPaymentMethodToBackend( paymentMethod.id, data );
    }
  }

  sendPaymentMethodToBackend( paymentMethod: any, data: Car ) {
    const info: PaymentInfo = {
      paymentMethod: paymentMethod,
      type: data.type,
      model: data.model,
      id: data.id.toString(),
      price: this.pricePlan,
      time: this.timePlan
    }
    this.service.makePayment( info ).subscribe(
      ( response: any ) => {
        if ( response.message == 'Payment completed successfully' ) {
          this.paymentSuccess = true;
          setTimeout( () => {
            this.paymentSuccess = false;
          }, 2500 );
        }
      },
      ( error: any ) => {
        console.error( 'Error:', error );
      }
    );
  }

  onSelectPlan( price: string, time: string ) {
    this.pricePlan = price;
    this.timePlan = time;
    this.showAlertSelectPlan = true;
    this.selectPlanMsg = `Your selected plan is ${price}$ in ${parseInt( time ) / 30 == 1 ? 'month' : 'months'}`;
    setTimeout( () => {
      this.showAlertSelectPlan = false;
      document.getElementById( "card" )?.classList.replace( 'd-none', 'd-block' );
      document.getElementById( "card" )?.scrollIntoView( { behavior: 'smooth' } );
    }, 2500 );
    
  }
  
  
  // make hover 1,3 change backColor 2
  card1Hovered = false; 
  card3Hovered = false;
  onCardHover(isHovered: boolean, cardNumber: number): void {
    if (cardNumber === 1) {
      this.card1Hovered = isHovered;
    } else if (cardNumber === 3) {
      this.card3Hovered = isHovered;
    }
  }

}

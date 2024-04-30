import { Component } from '@angular/core';
import { Car } from 'src/app/interfaces/car';
import { ProfileCarService } from 'src/app/services/profileCar.service';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
} )
export class AddCarComponent {

  selectedPhoto: any;
  valid = false;
  selectedCarType: string = '';
  carTypes = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Volkswagen', 'BMW',
    'Mercedes- Benz', 'Audi', 'Nissan', 'Hyundai', 'Kia', 'Subaru', 'Mazda',
    'Tesla', 'Volvo', 'Lexus', 'Porsche', 'Jaguar', 'Land Rover', 'Fiat',
    'Ram', 'GMC', 'Jeep', 'Mitsubishi'];


  constructor( private _carService: ProfileCarService, private router: Router ) {
  }

  ngOnInit() {
  }

  onSubmit( data: Car ) {

    const formData = new FormData();
    if ( this.selectedPhoto !== undefined ) {
      for ( const photo of this.selectedPhoto ) {
        formData.append( 'photos[]', photo );
      }
    }
    formData.append( 'type', data.type );
    formData.append( 'model', data.model );
    formData.append( 'first_release', data.first_release.toString() );
    formData.append( 'price_rent', data.price_rent.toString() );
    formData.append( 'governorate', data.governorate );
    formData.append( 'city', data.city );
    formData.append( 'address', data.address );
    formData.append( 'phone', data.phone.toString() );

    this._carService.addCar( formData ).subscribe( {
      next: ( response: any ) => {
        if ( response.message == "Car Added Successfully" ) {
          this.valid = true;
          setTimeout( () => {
            this.valid = false;
          }, 2500 );

        }
      },
      error: ( error: any ) => {
        if ( error.status === 401 ) {
          this.router.navigate( ["/login"] );
          localStorage.removeItem( 'access_token' );
        } else {
          console.log( error );
        }
      }
    } );
  }

  onPhotoSelected( event: Event ) {
    const inputElement = event.target as HTMLInputElement;
    const files = inputElement.files;
    if ( files ) {
      this.selectedPhoto = Array.from( files );
    }
  }

}

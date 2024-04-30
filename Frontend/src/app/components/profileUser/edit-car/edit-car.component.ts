import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/interfaces/car';
import { ProfileCarService } from 'src/app/services/profileCar.service';

@Component( {
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css'],
} )
export class EditCarComponent {
  id: number = 0;
  car: Car={
    id: 0,
    model: '',
    type: '',
    first_release: 0,
    price_rent: 0,
    governorate: '',
    city: '',
    address: '',
    phone: 0,
    status: 0,
    user_id: 0,
    created_at: null,
    updated_at: null,
    num_rent: 0,
    disable: 0,
    owner_name: '',
    type_owner: '',
    dates: [],
    photos: [],
    approved: 0
  };

  selectedPhoto: any;
  valid = false;
  selectedCarType: string = '';
  carTypes = [
    'Toyota', 'Honda', 'Ford', 'Chevrolet', 'Volkswagen', 'BMW', 'Mercedes- Benz', 'Audi', 'Nissan', 'Hyundai', 'Kia', 'Subaru', 'Mazda', 'Tesla', 'Volvo', 'Lexus', 'Porsche', 'Jaguar', 'Land Rover', 'Fiat', 'Ram', 'GMC', 'Jeep', 'Mitsubishi',
  ];

  constructor(
    private service: ProfileCarService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const idParam = this.route.snapshot.paramMap.get( 'id' );
    this.id = Number( idParam );
  }

  ngOnInit() {
    this.getCarById();
  }

  getCarById() {
    this.service.getCarById( this.id ).subscribe(
      ( response: any ) => {
        this.car = response;
      },
      ( error ) => {
        if ( error.status == 401 ) {
          localStorage.removeItem( 'access_token' );
          this.router.navigate( ['/login'] );
        }
      }
    );
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
    this.service.editCar( this.id, formData ).subscribe( {
      next: ( response: any ) => {
        
        if ( response.message == 'Car Updated Successfully' ) {
          this.valid = true;
          setTimeout( () => {
            this.valid = false;
          }, 2500 );
          this.selectedPhoto = undefined;
          this.getCarById();
        }
      },
      error: ( error: any ) => {
        if ( error.status === 401 ) {
          this.router.navigate( ['/login'] );
          localStorage.removeItem( 'access_token' );
        } else {
          console.log( error );
        }
      },
    } );
  }

  onPhotoSelected( event: Event ) {
    const inputElement = event.target as HTMLInputElement;
    const files = inputElement.files;
    if ( files ) {
      this.selectedPhoto = Array.from( files );
    }
  }

  onDelete( id: number ) {
    this.service.deletePhoto( id ).subscribe( {
      next: ( response: any ) => {
        if ( response.message == 'Deleted Successfully' ) {
          this.getCarById();
        }
      },
      error: ( error: any ) => {
        if ( error.status === 401 ) {
          this.router.navigate( ['/login'] );
          localStorage.removeItem( 'access_token' );
        } else {
          console.log( error );
        }
      },
    } );
  }
}

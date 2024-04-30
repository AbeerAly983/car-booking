import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Car } from 'src/app/interfaces/car';
import { CarService } from 'src/app/services/car.service';

@Component( {
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
} )
export class CarDetailsComponent {
  carDetails!: Car;
  photo: any;
  id = 0;
  constructor( private _carService: CarService, private _activeRouter: ActivatedRoute ) {
  }
  
  getCarDetails() {
    this._carService.getCarDetails( this.id ).subscribe( ( response: any ) => {
      this.carDetails = response.details.pop() as Car;
    }, ( error: any ) => {
      console.error( 'Error fetching car details:', error );
    } );
  }


foundData(): boolean {
  return this.carDetails !== undefined;
}


  ngOnInit(): void {
    this._activeRouter.paramMap.subscribe( ( params: ParamMap ) => {
      this.id = +params.get( 'id' )!;
      this.getCarDetails();
    } );
  }
}

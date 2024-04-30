import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Car } from 'src/app/interfaces/car';
import { CarService } from 'src/app/services/car.service';

@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
} )
export class HomeComponent {
  value: any = [];
  types: any = [];
  governorate: any[] = [];
  cars: Car[] = []; // cars with pagination
  currentPage: number = 1;
  lastPage: number = 1;
  responseMsg: any;
  allCarsFromPages: Car[] = []; // to store all data of cars without pagination
  searchText: string = ''; // search input value
  paginate: boolean = true; // to remove paginate when search
  showFilter: boolean = false; // to show filter in md
  showTypes: boolean = false; // to toggle icon type
  showGov: boolean = false; // to toggle icon gov
  constructor( private _carService: CarService ) { }

  ngOnInit(): void {
    this.getCars( this.currentPage ); // Initial loading of data
    this.AllCar();
    this.getData();
  }

  // get cars in each paginate
  getCars( page: number ): void {
    this._carService.getCars( page ).subscribe( ( response ) => {
      this.responseMsg = response;
      this.cars = this.responseMsg.data;
      this.currentPage = this.responseMsg.current_page;
      this.lastPage = this.responseMsg.last_page;
    } );
  }

  paginationLinks(): any[] {
    const links = [];
    for ( let i = 1; i <= this.lastPage; i++ ) {
      links.push( {
        url:
          i !== this.currentPage
            ? `http://127.0.0.1:8000/api/cars?page=${i}`
            : null,
        label: i.toString(),
        active: i === this.currentPage,
      } );
    }
    return links;
  }

  // get all cars to search
  AllCar(): void {
    this._carService.getCars( 1 ).subscribe( () => {
      const observables = [];
      for ( let i = 1; i <= this.lastPage; i++ ) {
        observables.push( this._carService.getCars( i ) );
      }
      forkJoin( observables ).subscribe( ( responses: any[] ) => {
        for ( const response of responses ) {
          this.allCarsFromPages.push( ...response.data );
        }
      } );
    } );

  }

  searchCar(): void {
    if ( this.searchText !== '' ) {
      this.cars = this.allCarsFromPages.filter( ( ele ) =>
        ele.type.toLowerCase().includes( this.searchText.toLowerCase() )
      );
      this.paginate = false;
    } else {
      this.getCars( this.currentPage ); // Initial loading of data
      this.paginate = true;
    }
  }

  // wait data from back
  foundData(): boolean {
    return this.cars.length !== 0;
  }

  // -----------------filter------------------------

  selectedTypes: { [key: string]: boolean } = {};
  selectedGovernorate: { [key: string]: boolean } = {};
  selectedFirstRelease: number | null;
  selectedMaxPrice: number | null;
  selectedMinPrice: number | null;

  // get types, governorate
  getData() {
    this._carService.getFilterValue().subscribe( ( result ) => {
      this.value = result;
      this.types = Object.values( this.value.type );
      this.governorate = Object.values( this.value.governorate );
    } );
  }

  filterTypesCars() {
    const selectedTypeKeys = Object.keys( this.selectedTypes ).filter( key => this.selectedTypes[key] == true );
    if ( selectedTypeKeys.length > 0 ) {
      this.cars = this.allCarsFromPages.filter( car => selectedTypeKeys.includes( car.type ) );
      this.paginate = false;
    } else {
      this.getCars( this.currentPage ); // Initial loading of data
      this.paginate = true;
    }
  }

  filterGovCars() {
    const selectedTypeKeys = Object.keys( this.selectedGovernorate ).filter( key => this.selectedGovernorate[key] == true );
    if ( selectedTypeKeys.length > 0 ) {
      this.cars = this.allCarsFromPages.filter( car => selectedTypeKeys.includes( car.governorate ) );
      this.paginate = false;
    } else {
      this.getCars( this.currentPage ); // Initial loading of data
      this.paginate = true;
    }
  }

  filterReleaseCars() {
    if ( this.selectedFirstRelease! > 0 ) {
      this.cars = this.allCarsFromPages.filter( car => this.selectedFirstRelease == car.first_release );
      this.paginate = false;
    } else {
      this.getCars( this.currentPage ); // Initial loading of data
      this.paginate = true;
    }
  }

  filterPriceCars() {
    console.log('selectedMinPrice:', this.selectedMinPrice);
    console.log('selectedMaxPrice:', this.selectedMaxPrice);
  
    if ( this.selectedMaxPrice! > 0 && this.selectedMinPrice! > 0 ) {
      this.cars = this.allCarsFromPages.filter( car => car.price_rent <= this.selectedMaxPrice! && car.price_rent >= this.selectedMinPrice! );
      this.paginate = false;
    } else {
      this.getCars( this.currentPage ); // Initial loading of data
      this.paginate = true;
    }
  }

  resetFilters(): void {
    this.selectedTypes = {};
    this.selectedGovernorate = {};
    this.selectedFirstRelease = null;
    this.selectedMaxPrice = null;
    this.selectedMinPrice = null;
    this.getCars( this.currentPage );
    this.paginate = true;
  }
}

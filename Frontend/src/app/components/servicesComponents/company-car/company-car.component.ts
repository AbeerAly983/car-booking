import { Component } from '@angular/core';
import { Car } from 'src/app/interfaces/car';
import { CarService } from 'src/app/services/car.service';

@Component( {
  selector: 'app-company-car',
  templateUrl: './company-car.component.html',
  styleUrls: ['./company-car.component.css']
} )
export class CompanyCarComponent {
  cars: Car[] = [];
  currentPage: number = 1;
  lastPage: number = 1;
  responseMsg: any;
  constructor( private _carService: CarService ) { }

  getCars( page: number ): void {
    this._carService.getCompanyCars( page )
      .subscribe( response => {
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
        url: i !== this.currentPage ? `http://127.0.0.1:8000/api/users_car?page=${i}` : null,
        label: i.toString(),
        active: i === this.currentPage
      } );
    }
    return links;
  }

  foundData(): boolean {
    let f = this.cars.length !== 0 ? true : false;
    return f;
  }

  ngOnInit(): void {
    this.getCars( 1 );
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCarComponent } from './company-car.component';

describe( 'CompanyCarComponent', () => {
  let component: CompanyCarComponent;
  let fixture: ComponentFixture<CompanyCarComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [CompanyCarComponent]
    } )
      .compileComponents();

    fixture = TestBed.createComponent( CompanyCarComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );

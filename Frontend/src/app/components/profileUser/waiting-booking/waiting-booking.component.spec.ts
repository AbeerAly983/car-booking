import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingBookingComponent } from './waiting-booking.component';

describe( 'WaitingBookingComponent', () => {
  let component: WaitingBookingComponent;
  let fixture: ComponentFixture<WaitingBookingComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [WaitingBookingComponent]
    } )
      .compileComponents();

    fixture = TestBed.createComponent( WaitingBookingComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );

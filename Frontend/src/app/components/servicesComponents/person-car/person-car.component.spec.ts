import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCarComponent } from './person-car.component';

describe( 'PersonCarComponent', () => {
  let component: PersonCarComponent;
  let fixture: ComponentFixture<PersonCarComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [PersonCarComponent]
    } )
      .compileComponents();

    fixture = TestBed.createComponent( PersonCarComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );

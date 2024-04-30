import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredCarsComponent } from './required-cars.component';

describe('RequiredCarsComponent', () => {
  let component: RequiredCarsComponent;
  let fixture: ComponentFixture<RequiredCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequiredCarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequiredCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

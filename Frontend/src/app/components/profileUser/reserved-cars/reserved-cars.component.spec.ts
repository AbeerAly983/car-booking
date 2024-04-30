import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservedCarsComponent } from './reserved-cars.component';

describe('ReservedCarsComponent', () => {
  let component: ReservedCarsComponent;
  let fixture: ComponentFixture<ReservedCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservedCarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservedCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

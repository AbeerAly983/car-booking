import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCarRentComponent } from './list-car-rent.component';

describe('ListCarRentComponent', () => {
  let component: ListCarRentComponent;
  let fixture: ComponentFixture<ListCarRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCarRentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCarRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

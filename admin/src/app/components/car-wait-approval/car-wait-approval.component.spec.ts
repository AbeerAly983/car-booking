import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarWaitApprovalComponent } from './car-wait-approval.component';

describe('CarWaitApprovalComponent', () => {
  let component: CarWaitApprovalComponent;
  let fixture: ComponentFixture<CarWaitApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarWaitApprovalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarWaitApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

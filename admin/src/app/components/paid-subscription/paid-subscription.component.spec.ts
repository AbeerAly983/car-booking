import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidSubscriptionComponent } from './paid-subscription.component';

describe('PaidSubscriptionComponent', () => {
  let component: PaidSubscriptionComponent;
  let fixture: ComponentFixture<PaidSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidSubscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaidSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

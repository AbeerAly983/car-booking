import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndSubscriptionComponent } from './end-subscription.component';

describe('EndSubscriptionComponent', () => {
  let component: EndSubscriptionComponent;
  let fixture: ComponentFixture<EndSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndSubscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

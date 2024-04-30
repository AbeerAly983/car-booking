import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitAnnualComponent } from './profit-annual.component';

describe('ProfitAnnualComponent', () => {
  let component: ProfitAnnualComponent;
  let fixture: ComponentFixture<ProfitAnnualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfitAnnualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfitAnnualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

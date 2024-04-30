import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitMonthlyComponent } from './profit-monthly.component';

describe('ProfitMonthlyComponent', () => {
  let component: ProfitMonthlyComponent;
  let fixture: ComponentFixture<ProfitMonthlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfitMonthlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfitMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

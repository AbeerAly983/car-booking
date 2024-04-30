import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarProfileCompanyComponent } from './sidebar-profile-company.component';

describe('SidebarProfileCompanyComponent', () => {
  let component: SidebarProfileCompanyComponent;
  let fixture: ComponentFixture<SidebarProfileCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarProfileCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarProfileCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { VerificationComponent } from './auth/verification/verification.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { HomeComponent } from './components/home/home.component';
import { CompanyCarComponent } from './components/servicesComponents/company-car/company-car.component';
import { PersonCarComponent } from './components/servicesComponents/person-car/person-car.component';
import { AddCarComponent } from './components/profileUser/add-car/add-car.component';
import { AuthGuard } from './guards/auth.guard';
import { CarGuard } from './guards/car.guard';
import { BookCarComponent } from './components/servicesComponents/book-car/book-car.component';
import { CarDetailsComponent } from './components/servicesComponents/car-details/car-details.component';
import { ProfileComponent } from './components/profileUser/profile/profile.component';
import { ReservedCarsComponent } from './components/profileUser/reserved-cars/reserved-cars.component';
import { RequiredCarsComponent } from './components/profileUser/required-cars/required-cars.component';
import { MyBookingComponent } from './components/profileUser/my-booking/my-booking.component';
import { MyCarsComponent } from './components/profileUser/my-cars/my-cars.component';
import { EditCarComponent } from './components/profileUser/edit-car/edit-car.component';
import { WaitApprovalComponent } from './components/profileUser/required-cars/wait-approval/wait-approval.component';
import { ListCarRentComponent } from './components/profileUser/reserved-cars/list-car-rent/list-car-rent.component';
import { WaitingBookingComponent } from './components/profileUser/waiting-booking/waiting-booking.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [AuthGuard] },
  {
    path: 'forgetPassword',
    component: ForgetPasswordComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'verification',
    component: VerificationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'resetPassword',
    component: ResetPasswordComponent,
    canActivate: [AuthGuard],
  },
  { path: 'home', component: HomeComponent },
  {
    path: 'bookingCar/:id',
    component: BookCarComponent,
    canActivate: [CarGuard],
  },
  {
    path: 'profile/myProfile',
    component: ProfileComponent,
    canActivate: [CarGuard],
  },
  {
    path: 'profile/addCar',
    component: AddCarComponent,
    canActivate: [CarGuard],
  },
  {
    path: 'profile/myCars',
    component: MyCarsComponent,
    canActivate: [CarGuard],
  },
  {
    path: 'profile/myBookings',
    component: MyBookingComponent,
    canActivate: [CarGuard],
  },
  {
    path: 'profile/pendingBookings',
    component: WaitingBookingComponent,
    canActivate: [CarGuard],
  },
  {
    path: 'profile/requiredCars',
    component: RequiredCarsComponent,
    canActivate: [CarGuard],
  },
  {
    path: 'profile/reservedCars',
    component: ReservedCarsComponent,
    canActivate: [CarGuard],
  },
  { path: 'services/bookingCarFromPerson', component: PersonCarComponent },
  { path: 'services/bookingCarFromCompany', component: CompanyCarComponent },
  { path: 'car/:id', component: CarDetailsComponent },
  {
    path: 'profile/myCars/edit-car/:id',
    component: EditCarComponent,
    canActivate: [CarGuard],
  },
  {
    path: 'profile/requiredCars/viewRequests/:id',
    component: WaitApprovalComponent,
    canActivate: [CarGuard],
  },

  {
    path: 'profile/reservedCars/viewReservedCars/:id',
    component: ListCarRentComponent,
    canActivate: [CarGuard],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
];

@NgModule( {
  imports: [RouterModule.forRoot( routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64]
  } ),],
  exports: [RouterModule],
} )
export class AppRoutingModule { }

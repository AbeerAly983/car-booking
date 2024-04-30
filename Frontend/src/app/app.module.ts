import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { VerificationComponent } from './auth/verification/verification.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { HomeComponent } from './components/home/home.component';
import { AddCarComponent } from './components/profileUser/add-car/add-car.component';
import { PersonCarComponent } from './components/servicesComponents/person-car/person-car.component';
import { CompanyCarComponent } from './components/servicesComponents/company-car/company-car.component';
import { BookCarComponent } from './components/servicesComponents/book-car/book-car.component';
import { CarDetailsComponent } from './components/servicesComponents/car-details/car-details.component';
import { ProfileComponent } from './components/profileUser/profile/profile.component';
import { MyBookingComponent } from './components/profileUser/my-booking/my-booking.component';
import { MyCarsComponent } from './components/profileUser/my-cars/my-cars.component';
import { ReservedCarsComponent } from './components/profileUser/reserved-cars/reserved-cars.component';
import { RequiredCarsComponent } from './components/profileUser/required-cars/required-cars.component';
import { SidebarProfileComponent } from './components/profileUser/sidebar-profile/sidebar-profile.component';
import { EditCarComponent } from './components/profileUser/edit-car/edit-car.component';
import { WaitApprovalComponent } from './components/profileUser/required-cars/wait-approval/wait-approval.component';
import { ListCarRentComponent } from './components/profileUser/reserved-cars/list-car-rent/list-car-rent.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WaitingBookingComponent } from './components/profileUser/waiting-booking/waiting-booking.component';
import { SidebarProfileCompanyComponent } from './components/profileUser/sidebar-profile-company/sidebar-profile-company.component';
@NgModule( {
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ForgetPasswordComponent,
    VerificationComponent,
    ResetPasswordComponent,
    HomeComponent,
    FooterComponent,
    NotfoundComponent,
    AddCarComponent,
    PersonCarComponent,
    CompanyCarComponent,
    BookCarComponent,
    CarDetailsComponent,
    ProfileComponent,
    MyBookingComponent,
    MyCarsComponent,
    ReservedCarsComponent,
    RequiredCarsComponent,
    SidebarProfileComponent,
    EditCarComponent,
    WaitApprovalComponent,
    ListCarRentComponent,
    WaitingBookingComponent,
    SidebarProfileCompanyComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
} )
export class AppModule { }

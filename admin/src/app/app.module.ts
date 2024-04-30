import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './auth/login/login.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarWaitApprovalComponent } from './components/car-wait-approval/car-wait-approval.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChartsComponent } from './components/charts/charts.component';
import { UserComponent } from './components/user/user.component';
import { AllCarsComponent } from './components/all-cars/all-cars.component';
import { ChartModule } from 'angular-highcharts';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { PaidSubscriptionComponent } from './components/paid-subscription/paid-subscription.component';
import { EndSubscriptionComponent } from './components/end-subscription/end-subscription.component';
import { ProfitMonthlyComponent } from './components/charts/profit-monthly/profit-monthly.component';
import { ProfitAnnualComponent } from './components/charts/profit-annual/profit-annual.component';
import { AddedUsersComponent } from './components/charts/added-users/added-users.component';
import { AllSubscriptionComponent } from './components/charts/all-subscription/all-subscription.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    NotfoundComponent,
    SidebarComponent,
    NavbarComponent,
    CarWaitApprovalComponent,
    ProfileComponent,
    ChartsComponent,
    UserComponent,
    AllCarsComponent,
    SubscriptionComponent,
    PaidSubscriptionComponent,
    EndSubscriptionComponent,
    ProfitMonthlyComponent,
    ProfitAnnualComponent,
    AddedUsersComponent,
    AllSubscriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    ChartModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

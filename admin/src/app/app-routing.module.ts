import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { AuthGuard } from './guards/auth.guard';
import { CarGuard } from './guards/car.guard';
import { CarWaitApprovalComponent } from './components/car-wait-approval/car-wait-approval.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChartsComponent } from './components/charts/charts.component';
import { AllCarsComponent } from './components/all-cars/all-cars.component';
import { UserComponent } from './components/user/user.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { EndSubscriptionComponent } from './components/end-subscription/end-subscription.component';
import { PaidSubscriptionComponent } from './components/paid-subscription/paid-subscription.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  {
    path: 'forgetPassword',
    component: ForgetPasswordComponent, canActivate: [AuthGuard]
  },
  {
    path: 'resetPassword',
    component: ResetPasswordComponent, canActivate: [AuthGuard]
  },
  { path: 'charts', component: ChartsComponent, canActivate: [CarGuard] },
  { path: 'profile', component: ProfileComponent , canActivate: [CarGuard]},
  { path: 'CarsWaitingApproval', component: CarWaitApprovalComponent, canActivate: [CarGuard] },
  { path: 'users', component: UserComponent, canActivate: [CarGuard] },
  { path: 'allSubscription', component: SubscriptionComponent, canActivate: [CarGuard] },
  { path: 'allCars', component: AllCarsComponent, canActivate: [CarGuard] },
  { path: 'expiredSubscriptions', component: EndSubscriptionComponent , canActivate: [CarGuard]},
  { path: 'paidSubscriptions', component: PaidSubscriptionComponent, canActivate: [CarGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
];

@NgModule( {
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule],
} )
export class AppRoutingModule { }

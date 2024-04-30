import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ResetPassword } from 'src/app/interfaces/auth';
import { User } from 'src/app/interfaces/User';


@Component( {
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css', "../login/login.component.css"]
} )
export class ResetPasswordComponent {

  constructor( private auth: AuthService, private router: Router ) { }
  userModel = new User( "", "", "", "", "" );
  email = {};
  inValid: boolean = false;
  resend: boolean = false;
  resetResult: any;
  loading: boolean = false; // add loading variable
  isLoading: boolean = false; // add loading variable

  onReset( data: ResetPassword ) {
    this.loading = true; // set loading variable to true
    let otpInputs = document.querySelectorAll<HTMLInputElement>( "#resetPassword .vr-con input" );
    data.otp = ""
    data.email = localStorage.getItem( "email" );
    for ( let index = 0; index < otpInputs.length; index++ ) {
      data.otp = data.otp + otpInputs[index].value;
    }

    this.auth.resetPassword( data ).subscribe( ( result ) => {
      this.resetResult = result;
      console.log( result );
      if ( this.resetResult.sucess == true ) {
        localStorage.removeItem( "email" );
        this.router.navigate( ['/login'] );
      }
      else if ( this.resetResult.error = 'this code does not correct' ) {
        this.inValid = true; //alert
        setTimeout( () => {
          this.inValid = false;
        }, 3000 );
        for ( let index = 0; index < otpInputs.length; index++ ) {
          otpInputs[index].value = "";
        }
      }
      this.loading = false; // set loading variable to true

    } );

  }

  focusInput() {
    let otpInputs = Array.from( document.querySelectorAll<HTMLInputElement>( "#resetPassword .vr-con input" ) );
    for ( let index = 0; index < otpInputs.length - 1; index++ ) {
      otpInputs[0].focus();
      otpInputs[index].addEventListener( "input", () => {
        if ( otpInputs[index].value.length == 1 ) {
          otpInputs[index + 1].focus();
        }
      } );
    }
  }

  ResendCode() {
    this.isLoading = true; // set loading variable to true
    this.ClearInputs();
    this.email = { email: localStorage.getItem( "email" ) };

    this.auth.resend( this.email ).subscribe( ( result ) => {
      this.resetResult = result;
      if ( this.resetResult.success = true ) {
        this.resend = true;
        setTimeout( () => {
          this.resend = false;
        }, 3000 );
      }

      this.isLoading = false; // set loading variable to true

    } );
  }

  ClearInputs() {
    let otpInputs = Array.from( document.querySelectorAll<HTMLInputElement>( "#resetPassword .input input" ) );
    for ( let index = 0; index < otpInputs.length; index++ ) {
      otpInputs[index].value = "";
    }
  }

  backLogin() {
    this.router.navigate( ['/login'] );
  }

  // show & hide password
  showPassword = false;
  showRepeatPassword = false;
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  toggleShowRepeatPassword() {
    this.showRepeatPassword = !this.showRepeatPassword;
  }

  ngOnInit(): void {
    this.focusInput();
    if(!localStorage.getItem('email')){
      this.router.navigate( ['/login'] );
    }
  }
}

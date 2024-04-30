import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Verification } from '../../interfaces/auth';



@Component( {
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css', '../login/login.component.css']
} )
export class VerificationComponent {

  verificationData: Verification = { otp: "", email: "" };
  email = {};
  msgAlert: string;
  result: any;
  isAlert: boolean = false;
  loading: boolean = false; // add loading variable
  isLoading: boolean = false; // for resend btn

  constructor( private auth: AuthService, private router: Router ) { }

  onVerify() {
    this.loading = true; // set loading variable to true
    let otpInputs = document.querySelectorAll<HTMLInputElement>( "#verifyContent .vr-con input" );
    this.verificationData.otp = "";
    for ( let index = 0; index < otpInputs.length; index++ ) {
      this.verificationData.otp = this.verificationData.otp + otpInputs[index].value;
    }
    this.verificationData.email = localStorage.getItem( "email" );
    this.auth.verifyEmail( this.verificationData ).subscribe( ( result ) => {
      this.result = result;
      if ( this.result.success == 'true' ) {
        localStorage.removeItem( "email" );
        this.router.navigate( ['/login'] );
      }
      else if ( this.result.error == 'OTP Is Wrong' ) {
        this.isAlert = true;
        this.msgAlert = 'Enter valid code!';
        this.ClearInputs();
        setTimeout( () => { this.isAlert = false }, 3000 );
      }
      else if ( this.result.error.email[0] == 'The selected email is invalid.' ) {
        this.isAlert = true; //alert
        this.msgAlert = 'This email is not found! Try again.';
        this.ClearInputs();
        setTimeout( () => {
          this.isAlert = false;
        }, 3000 );
      }
      this.loading = false; // set loading variable to false after the function is done
    } );
  }

  ResendCode() {
    this.isLoading = true; // set loading variable to true
    this.ClearInputs();
    this.email = { email: localStorage.getItem( "email" ) };
    this.auth.resend( this.email ).subscribe( ( result ) => {
      this.result = result;
      if ( this.result.success == true ) {
        this.isAlert = true;
        this.msgAlert = 'Code sent successfully.'
        setTimeout( () => {
          this.isAlert = false;
        }, 3000 );
      }
      else if ( this.result.error.email[0] == 'The selected email is invalid.' ) {
        this.isAlert = true; //alert
        this.msgAlert = 'This email is not found! Try again.';
        setTimeout( () => {
          this.isAlert = false;
        }, 3000 );
      }
      this.isLoading = false; // set loading variable to true
    } );
  }

  focusInput() {
    let vrInputs = Array.from( document.querySelectorAll<HTMLInputElement>( "#verifyContent .vr-con input" ) );
    vrInputs[0].focus();
    for ( let index = 0; index < vrInputs.length - 1; index++ ) {
      vrInputs[index].addEventListener( "input", () => {
        if ( vrInputs[index].value.length == 1 ) {
          vrInputs[index + 1].focus();
        }
      } );
    }
  }

  ClearInputs() {
    let otpInputs = Array.from( document.querySelectorAll<HTMLInputElement>( "#verifyContent .vr-con input" ) );
    for ( let index = 0; index < otpInputs.length; index++ ) {
      otpInputs[index].value = "";
    }
  }

  backSignup() {
    this.router.navigate( ['/signup'] );
    localStorage.removeItem( "email" );
  }

  ngOnInit(): void {
    this.focusInput();
    const email = localStorage.getItem( 'email' );
    if ( !email ) {
      this.router.navigate( ['/login'] );
    }
  }

}

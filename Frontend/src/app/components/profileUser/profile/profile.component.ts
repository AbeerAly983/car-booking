import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/interfaces/User';
import { ProfileCarService } from 'src/app/services/profileCar.service';

@Component( {
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
} )
export class ProfileComponent implements OnInit {

  user?: Profile;
  userData?: Profile;
  responseMsg: any;
  passYes: boolean = false;
  passNo: boolean = false;
  passOld: boolean = false;
  dropList: boolean = false;
  showFrom: boolean = true;
  ngOnInit(): void {
    this.getUserProfile();
    this.getUserProfile2();
  }

  constructor( private service: ProfileCarService, private router: Router ) {
  }

  getUserProfile() {
    this.service.userProfile().subscribe(
      ( data: any ) => {
        this.user = data;
      },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
          localStorage.removeItem( 'access_token' );
        }
      }
    );
  }

  getUserProfile2() {
    this.service.userProfile().subscribe(
      ( data: any ) => {
        this.userData = data;
      }
    );
  }

  onSubmit( data: Profile ) {
    this.service.changePassword( data ).subscribe( ( response ) => {
      this.responseMsg = response;
      if ( this.responseMsg.message == "Password Updated" ) {
        this.passYes = true;
        setTimeout( () => { this.passYes = false; }, 2500 );
      }
      else if ( this.responseMsg.message == "Password not correct" ) {
        this.passNo = true;
        setTimeout( () => { this.passNo = false; }, 2500 );
      }
      else if ( this.responseMsg.message == "There isn't password change" ) {
        this.passOld = true;
        setTimeout( () => { this.passOld = false; }, 2500 );
      }

    } );
  }

  onUpdateEmailName( data: Profile ) {
    this.service.changeEmail( data ).subscribe( ( response ) => {
      this.passYes = true;
      setTimeout( () => { this.passYes = false; }, 2500 );
      this.getUserProfile();
    } );
  }

  // show & hide password
  showPassword = false;
  showNewPassword = false;
  showRepeatPassword = false;
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  toggleShowNewPassword() {
    this.showNewPassword = !this.showNewPassword;
  }
  toggleShowRepeatPassword() {
    this.showRepeatPassword = !this.showRepeatPassword;
  }


  // show drop list of 3-dots
  showDropList() {
    this.dropList = !this.dropList;
  }

  // show form 
  showPassForm() {
    this.showFrom = true;
  }

  showEmailForm() {
    this.showFrom = false;
  }
}

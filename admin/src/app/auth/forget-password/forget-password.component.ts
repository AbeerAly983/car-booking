import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ForgetPassword } from '../../interfaces/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component( {
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css', '../login/login.component.css']
} )
export class ForgetPasswordComponent {
  loading: boolean = false; // add loading variable

  constructor( private auth: AuthService, private router: Router ) {
  }

  email = "";

  onForget( data: ForgetPassword ) {
    this.loading = true; // set loading variable to true
    this.auth.forgetPassword( data ).subscribe( () => {
      this.email = data.email;
      localStorage.setItem( "email", this.email );
      this.router.navigate( ['/resetPassword'] );
      this.loading = false; // set loading variable to false after the function is done
    } );
  }
  
  backLogin() {
    this.router.navigate( ['/login'] );
  }

}

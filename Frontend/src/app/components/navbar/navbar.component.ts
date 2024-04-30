import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component( {
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
} )
export class NavbarComponent implements OnInit {
  responseMsg: any;
  valid = false;
  constructor( private _service: AuthService, private router: Router ) { }

  logout() {
    this._service.logout().subscribe( {
      next: ( result ) => {
        this.responseMsg = result;
        if ( this.responseMsg.message === 'Signed out' ) {
          localStorage.removeItem( 'access_token' );
          this.valid = true;
          setTimeout(() => {
            this.valid = false;
            this.router.navigate( ['/home'] );
          }, 2000);
        }

      }, error: ( error: any ) => {
        if ( error.status === 401 ) {
          localStorage.removeItem( 'access_token' );
          this.router.navigate( ["/home"] );
        } else {
          console.log( error );
        }
      }
    } );
  }

  checkNav(): boolean {
    const token = localStorage.getItem( 'access_token' );
    return !!token;
  }

  ngOnInit(): void {

  }
}
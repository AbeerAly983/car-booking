import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileCarService } from 'src/app/services/profileCar.service';

@Component( {
  selector: 'app-sidebar-profile',
  templateUrl: './sidebar-profile.component.html',
  styleUrls: ['./sidebar-profile.component.css']
} )
export class SidebarProfileComponent {
  constructor( private service: ProfileCarService, private router: Router ) { }

  user ={id: 0, name: '', guard_name: ''};


  ngOnInit(): void {
    this.getDataProfile();
  }

  // company can't book car or see booking, pending in sidebar
  getDataProfile() {
    this.service.userProfile().subscribe(
      ( data: any ) => {
        this.user = data.roles.pop();
        console.log(this.user);
        
      },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
          localStorage.removeItem( 'access_token' );  
        }
      }
    );
  }
}

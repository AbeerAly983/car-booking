import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Count_Users } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  activeDiv: string = 'showRole'; // Variable used to active div
  countUsers?: Count_Users;
  AllRolesUsers: any[] = [];
  AllUsers: any[] = [];
  AllCompanyUsers: any[] = [];
  showRole: boolean = true;
  showUsers: boolean = false;
  showCompany: boolean = false;
  showBack: boolean = false;

  constructor(private service: UserService, private router: Router) {
    if (!localStorage.getItem('access_token')) {
      this.router.navigate(['/login']);
    }
  }
  ngOnInit(): void {
    this.getCountUsers();
    this.getAllUsersRole();
    this.getAllCompanyUsers();
    this.getAllUsers();
  }

  // get number of all users in system
  getCountUsers() {
    const token = localStorage.getItem('access_token');
    this.service.getCountUsers(token).subscribe(
      (response: any) => {
        this.countUsers = response;
      },
      (error) => {
        if (error.status == 401) {
          this.router.navigate(['/login']);
        }
      }
    );
  }
  getAllUsersRole() {
    const token = localStorage.getItem('access_token');
    this.service.getAllRolesUsers(token).subscribe(
      (response: any) => {
        this.AllRolesUsers = response;
      },
      (error) => {
        if (error.status == 401) {
          this.router.navigate(['/login']);
        }
      }
    );
  }
  getAllUsers() {
    const token = localStorage.getItem('access_token');
    this.service.getAllUsers(token).subscribe(
      (response: any) => {
        this.AllUsers = response;
      },
      (error) => {
        if (error.status == 401) {
          this.router.navigate(['/login']);
        }
      }
    );
  }
  getAllCompanyUsers() {
    const token = localStorage.getItem('access_token');
    this.service.getAllCompanyUsers(token).subscribe(
      (response: any) => {
        this.AllCompanyUsers = response;
      },
      (error) => {
        if (error.status == 401) {
          this.router.navigate(['/login']);
        }
      }
    );
  }

  // show table of role
  showAllRole() {
    this.showRole = true;
    this.showUsers = false;
    this.showCompany = false;
    this.showBack = true;
  }
  // show table of all users
  showAllUsers() {
    this.showUsers = true;
    this.showRole = false;
    this.showCompany = false;
    this.showBack = true;
  }
  // show table of company
  showAllCompany() {
    this.showRole = false;
    this.showUsers = false;
    this.showCompany = true;
    this.showBack = true;
  }

  setActiveDiv(div: string) {
    this.activeDiv = div;
  }
}

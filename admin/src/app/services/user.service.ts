import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getCountUsers(token: any) {
    return this.http.get(environment.baseUrl + '/count_users', {});
  }
  getAllRolesUsers(token: any) {
    return this.http.get(environment.baseUrl + '/count_users/all_users', {});
  }
  getAllUsers(token: any) {
    return this.http.get(environment.baseUrl + '/count_users/users', {});
  }
  getAllCompanyUsers(token: any) {
    return this.http.get(environment.baseUrl + '/count_users/companies', {});
  }
}

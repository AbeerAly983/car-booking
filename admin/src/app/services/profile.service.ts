import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  userProfile() {
    return this.http.get(environment.baseUrl + '/profile', {});
  }
  userData() {
    return this.http.get(environment.baseUrl + '/edit_admin', {});
  }
  changePassword(data: any) {
    return this.http.post(environment.baseUrl + '/change_admin_password', data);
  }
  changeData(data: any) {
    return this.http.post(environment.baseUrl + '/update_admin', data);
  }
}

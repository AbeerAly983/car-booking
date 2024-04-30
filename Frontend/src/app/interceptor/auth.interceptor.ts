import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
} from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = localStorage.getItem('access_token'); // get the token from local storage
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${authToken}`) // set the authorization header
    });
    return next.handle(authReq);
  }
}

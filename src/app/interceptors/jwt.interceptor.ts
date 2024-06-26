import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { environment } from '../environments/environment.prod';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private userService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // add auth header with jwt if user is logged in and request is to the api url
    const tokenObj = this.userService.tokenValue;
    const isLoggedIn = tokenObj && tokenObj.token;
    const isApiUrl = request.url.startsWith(environment.BaseUrl);
    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${tokenObj.token}`,
        },
      });
    }
    return next.handle(request);
  }
}

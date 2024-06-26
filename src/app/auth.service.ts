import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserToken } from './models/user-token';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private tokenSubject: BehaviorSubject<UserToken> | undefined;
  public token: Observable<UserToken> | undefined;

  constructor(private router: Router, private http: HttpClient) {
    const storedToken = localStorage.getItem('user-Token');
    const initialToken = storedToken ? JSON.parse(storedToken) : null;
    this.tokenSubject = new BehaviorSubject<UserToken>(initialToken);
    this.token = this.tokenSubject.asObservable();
  }

  public get tokenValue(): UserToken | undefined {
    return this.tokenSubject?.value;
  }

  login(email: string, password: string, device_id: string): Observable<UserToken> {
    const payload = {
      email,
      password,
      device_id
    };
    console.log('Payload:', payload);

    return this.http
      .post<UserToken>(`${environment.BaseUrl}/auth/signin`, payload)
      .pipe(
        map((token) => {
          const userToken: UserToken = token;
          localStorage.setItem('user-Token', JSON.stringify(userToken));
          if (this.tokenSubject) {
            this.tokenSubject.next(userToken);
          } else {
            throw new Error('tokenSubject is undefined');
          }
          this.isAuthenticated = true;
          this.router.navigate(['/main']);
          return userToken;
        })
      );
  }

  logout() {
    localStorage.removeItem('user-Token');
    this.tokenSubject?.next({} as UserToken);
    this.router.navigate(['/']);
    window.location.reload();
  }

  get isLoggedIn(): boolean {
    return this.isAuthenticated || !!localStorage.getItem('token');
  }
}

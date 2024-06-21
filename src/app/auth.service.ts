import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    // Replace this with real authentication logic
    if (username === 'user' && password === 'password') {
      this.isAuthenticated = true;
      localStorage.setItem('token', 'your-token');
      this.router.navigate(['/main']);
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  get isLoggedIn(): boolean {
    return this.isAuthenticated || !!localStorage.getItem('token');
  }
}

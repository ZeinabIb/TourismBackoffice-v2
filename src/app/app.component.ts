import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TourismBackoffice-v2';
  constructor(public authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}

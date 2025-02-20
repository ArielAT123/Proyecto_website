import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], 
  template: `
  <!-- <nav>
    <a routerLink="/">Home</a>
    <a routerLink="/dashboard">Dashboard</a>
    <a routerLink="/login">Login</a>
  </nav> -->
    <router-outlet></router-outlet> 
  `,
  styleUrls: ['./app.component.css'],
})  
export class AppComponent {}

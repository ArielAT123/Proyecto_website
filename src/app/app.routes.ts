import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { RegistroComponent } from './registro/registro.component'; 
import { CardProductComponent } from './card-product/card-product.component';
import { ScreenHomeComponent } from './screen-home/screen-home.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'screen-home', pathMatch: 'full' }, // Redirige a /login por defecto
  { path: 'card-product', component: CardProductComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'screen-home', component: ScreenHomeComponent },
];
import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { RegistroComponent } from './registro/registro.component'; 
import { CardProductComponent } from './card-product/card-product.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirige a /login por defecto
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cardproduct', component: CardProductComponent }

];
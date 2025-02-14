import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { RegistroComponent } from './registro/registro.component'; 
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
    {path:'register', component: RegistroComponent},
  { path: 'dashboard', component: DashboardComponent }, 
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
];
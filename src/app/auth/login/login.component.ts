import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  password = '';

  
  constructor(private router: Router) {}


  goToRegister() {
    console.log('Redirigiendo a Registro...');
    this.router.navigate(['/registro']);  
  }

  login() {
    if (this.email === 'usuario@example.com' && this.password === 'contraseña') {
      localStorage.setItem('token', 'token-simulado'); 
      console.log('Redirigiendo a Dashboard...');
      this.router.navigate(['/cardproduct']); 
    } else {
      alert('Credenciales incorrectas'); 
    }
  }

  
} 
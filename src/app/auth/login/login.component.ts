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

  login() {
    if (this.email === 'usuario@example.com' && this.password === 'contraseña') {
      localStorage.setItem('token', 'token-simulado'); 
      this.router.navigate(['/dashboard']); 
    } else {
      alert('Credenciales incorrectas'); 
    }
  }
}
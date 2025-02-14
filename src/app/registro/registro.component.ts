import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-registro',
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
    email = String;
    password = String;
    repeatPassword = String;
  
    constructor(private router: Router) {}
  
    register() {
      if (this.password === this.repeatPassword) {
        localStorage.setItem('token', 'token-simulado'); 
        this.router.navigate(['/login']); 
      } else {
        alert('contraseña mal escrita'); 
      }
    }
}

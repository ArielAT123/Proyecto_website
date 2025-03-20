import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from "../dashboard/dashboard.component"; // Importa DashboardComponent

@Component({
  selector: 'app-perfil-usuario',
  standalone: true,
  imports: [RouterModule, DashboardComponent], // Agrega DashboardComponent a las imports
  templateUrl: './perfil-usuario.component.html',
  styleUrl: './perfil-usuario.component.css'
})
export class PerfilUsuarioComponent {
  nombre_negocio: string = "Negocio Espol";
  nombre_usuario: string = "Alejandro Pendejo";
  correo: string = "alejandroruben@espol.edu.ec";
  telefono: string = "0990912389";
  descripcion: string = "Negocio de venta de productos de tecnología";
  ubicacion: string = "Guayaquil";
}
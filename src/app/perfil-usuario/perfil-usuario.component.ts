import { Component } from '@angular/core';
import { ScreenHomeComponent } from "../screen-home/screen-home.component";

@Component({
  selector: 'app-perfil-usuario',
  imports: [ScreenHomeComponent],
  templateUrl: './perfil-usuario.component.html',
  styleUrl: './perfil-usuario.component.css'
})
export class PerfilUsuarioComponent {
screen_home:ScreenHomeComponent = new ScreenHomeComponent();
nombre_negocio:string = "Negocio Espol"; 
nombre_usuario:string = "Alejandro Pendejo";
correo:string = "alejandroruben@espol.edu.ec";
telefono:string = "0990912389";
descripcion:string = "Negocio de venta de productos de tecnología";
ubicacion:string = "Guayaquil";
}

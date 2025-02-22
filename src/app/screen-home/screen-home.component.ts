import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { CardProductComponent } from '../card-product/card-product.component';
import { RouterLink, RouterOutlet } from '@angular/router'; 

@Component({
  selector: 'app-screen-home',
  imports: [CardProductComponent, RouterLink, RouterOutlet, CommonModule],
  templateUrl: './screen-home.component.html',
  styleUrls: ['./screen-home.component.css'],
  standalone: true,
})
export class ScreenHomeComponent {

  listaUrlImagenes = ['https://image.made-in-china.com/202f0j00ZNtkFCuGLJor/OEM-Factory-Customized-Anime-Action-Figure-Products-Movie-Comics-Manga-Video-Game-Cartoon-Character-Gojo-Satoru-Geto-Suguru-Jujutsu-Kaisen-Figure.webp' , 
  'https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202308/18/00183180143485____1__640x640.jpg',
   'https://ss639.liverpool.com.mx/xl/1123934292.jpg'];

  products = [
    { id: 1, name: 'Producto 1', price: 100, descripcionMin: 'Descripción del Producto 1', imageUrl: 'https://image.made-in-china.com/202f0j00ZNtkFCuGLJor/OEM-Factory-Customized-Anime-Action-Figure-Products-Movie-Comics-Manga-Video-Game-Cartoon-Character-Gojo-Satoru-Geto-Suguru-Jujutsu-Kaisen-Figure.webp' },
    { id: 2, name: 'Producto 2', price: 200, descripcionMin: 'Descripción del Producto 2', imageUrl: 'https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202308/18/00183180143485____1__640x640.jpg' },
    { id: 3, name: 'Producto 3', price: 300, descripcionMin: 'Descripción del Producto 3', imageUrl: 'https://ss639.liverpool.com.mx/xl/1123934292.jpg' }];

  constructor() {
    
    for (let i = 4; i <= 64; i++) {
      this.products.push({ 
        id: i, 
        name: `Producto ${i}`, 
        price: 100 * i, 
        descripcionMin: `Descripción del Producto ${i}`, 
        imageUrl: this.listaUrlImagenes[Math.floor(Math.random() * this.listaUrlImagenes.length)] 
      });
    }
  }
}

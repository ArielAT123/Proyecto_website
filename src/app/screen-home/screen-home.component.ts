import { Component } from '@angular/core';
import { CardProductComponent } from '../card-product/card-product.component';
import { RouterLink, RouterOutlet } from '@angular/router'; 

@Component({
  selector: 'app-screen-home',
  imports: [CardProductComponent, RouterLink, RouterOutlet],
  templateUrl: './screen-home.component.html',
  styleUrls: ['./screen-home.component.css'],
  standalone: true,
})
export class ScreenHomeComponent { 
  
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardProductComponent } from './card-product/card-product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'website';
}

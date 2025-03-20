import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

interface Product {
  name: string;
  price: number;
  descripcionMin: string;
  imageUrl: string;
}

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css'],
  standalone: true,
  imports: [CommonModule], // Importa CommonModule aquí
})
export class CardProductComponent {
  @Input() product!: Product;
}
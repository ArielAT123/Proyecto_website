import { Component, Input } from '@angular/core';

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
})
export class CardProductComponent {
  @Input() product!: Product;
} 

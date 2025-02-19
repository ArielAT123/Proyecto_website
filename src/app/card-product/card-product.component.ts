import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-product',
  // imports: [], // Puedes eliminar esto si no usas imports
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css'],
  standalone: true,
})
export class CardProductComponent {
  @Input() price : number = 0; 
  @Input() descripcionMin : string = 'Cargando...';
  @Input() name : string = 'Cargando...';
  @Input() imageUrl : string = '';

}

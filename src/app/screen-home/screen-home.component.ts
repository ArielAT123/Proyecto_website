import { Component } from '@angular/core';
import { CardProductComponent } from '../card-product/card-product.component';

@Component({
  selector: 'app-screen-home',
  imports: [ CardProductComponent ],
  templateUrl: './screen-home.component.html',
  styleUrls: ['./screen-home.component.css'],
  standalone: true,
  
})
export class ScreenHomeComponent {

}

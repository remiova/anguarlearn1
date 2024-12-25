import { Component } from '@angular/core';
import { Product3dComponent } from '../../+components/product3d/product3d.component';

@Component({
  selector: 'app-products',
  imports: [Product3dComponent,],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}

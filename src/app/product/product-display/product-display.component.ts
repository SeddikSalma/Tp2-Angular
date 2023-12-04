import { Component, Input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent {
  @Input({
    required: true,
    alias: 'products-list'
  })
  set productsList(data: Product[]) {
    this.products = data;
  }
  products: Product[] = []

  constructor() {
  }
}

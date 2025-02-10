import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../shared/models/products.model';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() product: Product | undefined ;
  @Output() productSelected: EventEmitter<Product> = new EventEmitter<Product>();

  selectProduct() {
    this.productSelected.emit(this.product);
  }

}

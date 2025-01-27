import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product-list-component',
  imports: [],
  templateUrl: './product-list-component.component.html',
  styleUrl: './product-list-component.component.css'
})
export class ProductListComponentComponent {
  @Input () message : string = '';
  @Input () img : string = '';


  @Output() purchase = new EventEmitter<number>();

  addToCart() {
    this.purchase.emit(1);
  }

}

import { Component, Input, Output, EventEmitter, Injectable } from '@angular/core';
import { Model } from '../models/model';
import { ProductServiceService } from '@app/services/product-service.service';

@Component({
  selector: 'app-product-list-component',
  imports: [],
  templateUrl: './product-list-component.component.html',
  styleUrl: './product-list-component.component.css'
})


export class ProductListComponentComponent {
  @Input () message : string = '';
  @Input ({required: true}) product! : Model.Product;

  @Output() purchase = new EventEmitter<Model.Product>();

  constructor(
    private productService: ProductServiceService,
    
  ) {}

  onClick(product: Model.Product) {
    this.productService.addNewProduct(product);
  }

}

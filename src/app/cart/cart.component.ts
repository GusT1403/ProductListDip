import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Model } from '@app/models/model';
import { ProductServiceService } from '@app/services/product-service.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent {

  products: Model.Product[] = [];

  constructor(private productService: ProductServiceService) { }

  ngOnInit() {
    this.productService.products.subscribe(products => {
      console.log(products);
      this.products = products;
    });
  }
}

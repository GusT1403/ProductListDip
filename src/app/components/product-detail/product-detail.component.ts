import { Component } from '@angular/core';
import { Product } from '../../shared/models/products.model';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductsService } from '../../services/product-service.service';

@Component({
  selector: 'app-product-detail',
  imports: [RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product: Product | undefined;
  constructor(
    private router: Router,
    private activeroute: ActivatedRoute,
    private productservice: ProductsService,
  ) {
    const id = Number(this.activeroute.snapshot.paramMap.get('id'));
    this.productservice.getProductById(id).subscribe((product) => {
      this.product = product;
    });
  }
  buyNow() {
    console.log('Product bought');
  }
  addToCart() {
    console.log('Product added to cart');
  }
  goToProducts() {
    this.router.navigate(['/products']);
  }
  
}

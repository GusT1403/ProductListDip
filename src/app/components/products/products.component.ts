import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from "../product-card/product-card.component";
import { Product } from '../../shared/models/products.model';
import { ProductsService } from '../../services/product-service.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [ProductCardComponent, CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  list: Product[] = [];

  constructor(private productService: ProductsService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.list = products;
      console.log(this.list);
    });
  }

  goToDetails(product: Product) {
    console.log(product);
    this.router.navigate(['/products', product.id]);
  }

}


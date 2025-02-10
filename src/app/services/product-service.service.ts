import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../shared/models/products.model';
import { DATA } from '../../assets/data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = DATA;

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find(product => product.id === id));
  }

  updateProduct(product: Product): Observable<Product> {
    const index = this.products.findIndex(p => p.id === product.id);
    this.products[index] = product;
    return of(product);
  }

  deleteProduct(id: number): Observable<Product> {
    const index = this.products.findIndex(p => p.id === id);
    const product = this.products[index];
    this.products.splice(index, 1);
    return of(product);
  }

  generateId(): number {
    return this.products.length ? Math.max(...this.products.map(product => product.id)) + 1 : 1;
  }
  postProduct(product: Product): Observable<Product> {
    this.products.push(product);
    return of(product);
  }
}

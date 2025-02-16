import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Product } from '../shared/models/products.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'https://api.rawg.io/api/games';
  private readonly baseKey = '5e44438e8fcf4f5887105a6a70ce9d25';
  private localStorageKey = 'productsCache';

  getProducts(): Observable<Product[]> {
    const cachedProducts = localStorage.getItem(this.localStorageKey);
    if (cachedProducts) {
      return of(JSON.parse(cachedProducts));
    } else {
      return this.http.get<{ results: Product[] }>(`${this.baseUrl}?key=${this.baseKey}`).pipe(
        map((response: any) => response.results),
        tap(products => localStorage.setItem(this.localStorageKey, JSON.stringify(products)))
      );
    }
  }

  getProductById(id: number): Observable<Product> {
    const cachedProducts = localStorage.getItem(this.localStorageKey);
    if (cachedProducts) {
      const products: Product[] = JSON.parse(cachedProducts);
      const product = products.find(p => p.id === id);
      if (product) {
        return of(product);
      }
    }
    return this.http.get<Product>(`${this.baseUrl}/${id}?key=${this.baseKey}`);
  }
}


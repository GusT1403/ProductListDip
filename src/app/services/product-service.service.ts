import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Model } from '../models/model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/* @Injectable({providedIn: 'root'})
  export class ConfigService {
  constructor(private http: HttpClient) {  }
} */

export class ProductServiceService {

  private cartProducts: Model.Product[] = [];
  private _products: BehaviorSubject<Model.Product[]>;

  constructor() {
    this._products = new BehaviorSubject<Model.Product[]>([])
  }

  get products() {
    return this._products.asObservable();
  }

  addNewProduct(product: Model.Product) {
    this.cartProducts.push(product);
    this._products.next(this.cartProducts);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from '@models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  store: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);

  myCart$ = this.myCart.asObservable();

  constructor() { }

  addProduct(product: Product){
    this.store.push(product);
    this.myCart.next(this.store);
  }

  getTotal(){
    return this.store.reduce( (total, product) => total + product.price, 0);
  }

  getStore(){
    return this.store
  }
}

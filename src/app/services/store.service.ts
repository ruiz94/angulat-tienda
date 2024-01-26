import { Injectable } from '@angular/core';

import { Product } from '@models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  store: Product[] = [];

  constructor() { }

  addProduct(product: Product){
    this.store.push(product);
  }

  getTotal(){
    return this.store.reduce( (total, product) => total + product.price, 0);
  }

  getStore(){
    return this.store
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '@models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private URL = "https://young-sands-07814.herokuapp.com"

  constructor(
    private http: HttpClient
  ) {
  }

  getAllProducts(){
    return this.http.get<Product[]>(this.URL + "/api/products");
  }

  getOne(id: string){
    return this.http.get<Product>(this.URL + "/api/products/" + id)
  }
}

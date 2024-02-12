import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product, CreateProductDTO, UpdateProductDTO } from '@models/product.model';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private URL = "https://young-sands-07814.herokuapp.com/api/products"

  constructor(
    private http: HttpClient
  ) {
  }

  getAllProducts(){
    return this.http.get<Product[]>(this.URL);
  }

  getOne(id: string){
    return this.http.get<Product>(`${this.URL}/${id}`)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.status === 500){
          return throwError('Algo esta fallando en el server');
        }
        if(error.status === 400){
          return throwError('El producto no existe');
        }
        return throwError('Ups algo salió mal');
      })
    )
  }

  getProductByPage(limit: number, offset: number){
    return this.http.get<Product[]>(`${this.URL}`, {
      params: {
        limit,
        offset
      }
    })
    .pipe(
      retry(3)
    )
  }

  create(dto: CreateProductDTO){
    return this.http.post<Product>(this.URL, dto);
  }

  update(id: string, dto: UpdateProductDTO) {
    return this.http.put<Product>(`${this.URL}/${id}`, dto);
  }

  delete(id: string){
    return this.http.delete<boolean>(`${this.URL}/${id}`);
  }
}

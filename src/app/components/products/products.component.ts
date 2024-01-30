import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '@components/product/product.component';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';
import type { Product } from '@models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  products = signal<Product[]>([])
  shoppingCart: Product[] = [];
  showProductDetail: boolean = false;
  productDetail: Product | null = null

  totalPrice: number = 0;

  constructor(
    private productsService: ProductsService,
    private storeService: StoreService
  ){
    this.shoppingCart = this.storeService.getStore();
  }

  ngOnInit(){
    this.productsService.getAllProducts()
    .subscribe(data => {
      console.log(data)
      this.products.set(data);
    })
  }

  onAddToCart(product: Product){
    this.storeService.addProduct(product);
    this.totalPrice = this.storeService.getTotal();
  }

  onToggleProductDetail(){
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id: string){
    console.log(id)
    this.productsService.getOne(id)
    .subscribe( data => {
      console.log("data product", data)
      this.productDetail = data;
    })
    this.onToggleProductDetail()
  }
}

import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '@components/product/product.component';
import { StoreService } from '../../services/store.service';
import type { Product } from '@models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  private storeService = inject(StoreService);
  @Input() products: Product[] = []
  shoppingCart: Product[] = [];

  totalPrice: number = 0;

  constructor(){
    this.shoppingCart = this.storeService.getStore();
  }

  onAddToCart(product: Product){
    this.storeService.addProduct(product);
    this.totalPrice = this.storeService.getTotal();
  }
}

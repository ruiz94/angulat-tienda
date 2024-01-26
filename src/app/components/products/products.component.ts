import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '@components/product/product.component';
import type { Product } from '@models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  @Input() products: Product[] = []
  shoppingCart: Product[] = [];
  totalPrice: number = 0;

  onAddToCart(product: Product){
    console.log("ProductsComponent",product)
    this.shoppingCart.push(product);
    this.totalPrice = this.shoppingCart.reduce( (total, product) => total + product.price, 0);
  }
}

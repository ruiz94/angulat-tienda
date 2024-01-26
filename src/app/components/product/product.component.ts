import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { Product } from '@models/product.model';
import { ImgComponent } from '@components/img/img.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ImgComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product: Product | null = null
  @Output() addProduct = new EventEmitter<Product>();

  addToCart(){
    if(this.product)
      this.addProduct.emit(this.product)
  }
}

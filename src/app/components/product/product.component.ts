import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { Product } from '@models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product: Product | null = null

}

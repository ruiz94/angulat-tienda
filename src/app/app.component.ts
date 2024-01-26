import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import type { Product } from '@models/product.model';
import { ProductsComponent } from '@components/products/products.component';
import { NavComponent } from '@components/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductsComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  products: Product[] = [{
    id: '274',
    name: "Nike Shoes",
    image: "../../../assets/images/red-nike-shoes.jpg",
    price: 133
  },{
    id: '395',
    name: "Vans Shoes",
    image: "../../../assets/images/red-vans-shoes.jpg",
    price: 133
  }]

  onLoaded(event: string){
    console.log("log padre", event)
  }
}

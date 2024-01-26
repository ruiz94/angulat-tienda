import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import type { Product } from '@models/product.model';
import { ProductsComponent } from '@components/products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  imgParent = 'https://www.w3schools.com/howto/img_avatar.png';
  products: Product[] = [{
    id: '1234',
    name: "product 1",
    image: "../../../assets/images/default_img.png",
    price: 133
  },{
    id: '1234',
    name: "product 1",
    image: "../../../assets/images/default_img.png",
    price: 133
  }]

  onLoaded(event: string){
    console.log("log padre", event)
  }
}

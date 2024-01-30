import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from '@components/product-detail/product-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'product',
    component: ProductDetailComponent
  }
];

import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '@components/product/product.component';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';
import type { CreateProductDTO, Product, UpdateProductDTO } from '@models/product.model';
import { ImgComponent } from '@components/img/img.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductComponent, ImgComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  products = signal<Product[]>([])
  shoppingCart: Product[] = [];
  showProductDetail: boolean = false;
  productDetail: Product | null = null

  limit = 6;
  offset = 0;
  totalPrice: number = 0;

  constructor(
    private productsService: ProductsService,
    private storeService: StoreService
  ){
    this.shoppingCart = this.storeService.getStore();
  }

  ngOnInit(){
    this.loadProductsByPage()
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

  createNewProduct(){
    const product: CreateProductDTO = {
      title: 'Dummy Product',
      description: 'Lorem Ipmsu',
      images: [''],
      price: 24.3,
      categoryId: 2,
    }
    this.productsService.create(product)
    .subscribe( data => {
      console.log('created', data);

      this.products.update(prev => [data, ...prev]);
    })
  }

  updateProduct(){
    const dto: UpdateProductDTO = {
      title: 'change Title'
    }
    const id = this.productDetail!.id;
    this.productsService.update(id, dto)
    .subscribe( data => {
      console.log(data);
      const productIndex = this.products().findIndex(item => item.id === id);
      this.products()[productIndex] = data;
      this.showProductDetail = false;
    })
  }

  deleteProduct(){
    const id = this.productDetail!.id;
    this.productsService.delete(id)
    .subscribe( response => {
      console.log(response);
      // const productIndex = this.products().findIndex( item => item.id === id);
      this.products.update( prev => prev.filter( item => item.id !== id));
      this.showProductDetail = false;
    })
  }

  loadProductsByPage(){
    this.productsService.getProductByPage(this.limit, this.offset)
    .subscribe(data => {
      this.offset += this.limit;
      this.products.update((prev) => [...prev, ...data]);
    })
  }
}

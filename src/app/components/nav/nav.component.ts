import { Component } from '@angular/core';

import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  activeMenu = false;
  counter = 0;

  constructor(
    private storeService: StoreService
  ){}

  ngOnInit(){
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length;
    })
  }

  toggleMenu(){
    this.activeMenu = !this.activeMenu;
  }

}

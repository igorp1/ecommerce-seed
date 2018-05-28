import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product, ProductFilter } from '../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  currentLoadProductsPage : number = 0;

  constructor() { }

  loadProducts(productPage : number = 0) : Observable<Product[]> {
    this.currentLoadProductsPage = 0;
    /* TODO: */
    return of([new Product()]);
  }

  loadMoreProducts() : Observable<Product[]> {
    this.currentLoadProductsPage += 1;
    /* TODO: */
    return this.loadProducts(this.currentLoadProductsPage);
  }

  loadProductsWithFilter(filterSettings : ProductFilter) : Observable<Product[]> {
    /* TODO: */
    return of([new Product()]);
  }

}

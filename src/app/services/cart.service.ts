import { Injectable } from '@angular/core';
import { Product } from '../models/product.models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartID : string; // will become orderID

  products : Array<Product> = new Array<Product>();
  status : 'idle' | 'shopping' | 'paying' = 'idle';

  get total() : number {
    return this.products.map( (prod) => { return prod.price*prod.quantity }).reduce((acc, x)=>acc+x);
  } 

  get isEmpty() : boolean { return this.products.length === 0; }

  constructor() { }

  getCartID() : Observable<string>  { /* TODO: */ return of('CART ID'); }

  add(product : Product) : Observable<boolean>  { 
    if(this.status === 'idle'){ this.status = 'shopping'; }
    this.products.push(product);
    /* TODO: */ 
    return of(true); 
  }

  remove(id : string) : Observable<boolean>  { 
    this.products = this.products.filter( (prod)=>prod.id !== id );
    /* TODO: */ 
    return of(true); 
  }

  empty() : Observable<boolean>  { /* TODO: */ return of(true); }

  checkOut() : Observable<boolean>  { 
    /* TODO: */ 
    this.status = 'paying';
    return of(true); 
  }

}

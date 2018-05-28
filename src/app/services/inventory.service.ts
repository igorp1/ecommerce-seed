import { Injectable } from '@angular/core';
import { IProduct } from '../models/product.models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService { // ~~> MUST BE ADMIN

  constructor() { }

  add(product : IProduct) : Observable<string>{
    /* TODO: */
    return of('product ID');
  }

  remove(producID : string) : Observable<boolean>{
    /* TODO: */
    return of(true);
  }

  update(product : IProduct) : Observable<boolean>{
    /* TODO: */ 
    return of(true);
  }
  
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IOrder, IOrderFilter } from '../models/order.models';

@Injectable({
  providedIn: 'root'
})
export class OrdersService { // ~~> MUST BE ADMIN

  currentLoadOrdersPage : number = 0;
  currentLoadOrdersFilteredPage : number = 0;

  constructor() { }

  loadOrders(page : number = 0) : Observable<IOrder[]>{
    this.currentLoadOrdersPage = 0;
    /* TODO: */
    return of([]);
  }

  loadMoreOrders() : Observable<IOrder[]>{
    this.currentLoadOrdersPage += 1;
    /* TODO: */
    return this.loadOrders(this.currentLoadOrdersPage);
  }

  loadOrdersWithFilter(filter : IOrderFilter) : Observable<IOrder[]>{
    this.currentLoadOrdersFilteredPage = 0;
    /* TODO: */
    return of([]);
  }

  loadMoreOrdersWithFilter() : Observable<IOrder[]>{
    this.currentLoadOrdersFilteredPage += 1;
    /* TODO: */
    return this.loadOrders(this.currentLoadOrdersPage);
  }

}


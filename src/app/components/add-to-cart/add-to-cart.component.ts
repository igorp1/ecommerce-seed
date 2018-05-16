import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../pages/product/product.component';

@Component({
  selector: 'add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {

  @Input() product : Product;
  @Output() productChange : EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  emitProductUpdate(){
    this.productChange.emit(this.product);
  }

  plusProductQuantity(){
    this.product.plusQuantity()
    this.emitProductUpdate();
  }

  minusProductQuantity(){
    this.product.minusQuantity()
    this.emitProductUpdate();
  }

}

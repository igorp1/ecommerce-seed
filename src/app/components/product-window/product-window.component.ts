import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../../pages/product/product.component';
import { ContextService } from '../../services/context.service';

@Component({
  selector: 'product-window',
  templateUrl: './product-window.component.html',
  styleUrls: ['./product-window.component.scss']
})
export class ProductWindowComponent implements OnInit {
  
  @Input() product : IProduct;

  saleTagColor : string = 'tomato';

  showContextMenu : boolean = false;
  

  constructor(private _context : ContextService) { }

  ngOnInit() { }

  onRightClick(event : MouseEvent){;
    this._context.openContextMenu(
      {left:event.clientX, top:event.clientY},
      [
        {label: 'Open product', action: ()=>{this.openProduct()}},
        {label: 'Add to cart', action: ()=>{this.quickAddTocart()}},
        {label: 'Add to wishlist', action: ()=>{this.quickAddToWishList()}}
      ]
    );
    return false;
  }

  openProduct(){
    console.log(`🛒 Opening product : ${this.product.name}`);
  }

  quickAddTocart(){
    console.log(`🛒 Adding product to cart : ${this.product.name}`);
  }

  quickAddToWishList(){
    console.log(`🛒 Adding product to wishlist : ${this.product.name}`);
  }

}

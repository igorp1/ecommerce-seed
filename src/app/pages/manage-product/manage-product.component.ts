import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContextService } from '../../services/context.service';
import { IProduct } from '../../models/product.models';


@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss']
})
export class ManageProductComponent implements OnInit {

  product : IProduct;
  originalProductCopy : IProduct;

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private _context : ContextService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this._context.loadProductFromSlug(params['slug'],(product)=>{
        this.product = product;
        this.originalProductCopy = product;
      });
    })
  }

  saveProductChanges(){
    console.log('🛒 Saving product updates');
  }

}

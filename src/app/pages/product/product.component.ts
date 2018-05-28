import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContextService } from '../../services/context.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Product } from '../../models/product.models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(
    private route : ActivatedRoute,
    private _context : ContextService,
  ) { }

  product : Product;
  productView : "side-by-side" | "stacked" = "side-by-side";

  loadingProduct : boolean;

  ngOnInit() {
    this.loadProduct();
  }

  loadProduct(){
    this.loadingProduct = true;
    this.route.params.subscribe(params => {
      this._context.loadProductFromSlug(params['slug'], (product)=>{
        this.product = product;
        this.loadingProduct = false;
      });
    });
  }
}


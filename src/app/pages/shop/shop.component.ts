import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IProduct } from '../../models/product.models';
import { IRange } from '../../models/common.models';
import { ContextService } from '../../services/context.service';
import { IShopCategory } from '../../models/shop.models';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  sortOptions : any[] = [
    {label:'Lowest prices first'},
    {label:'Highest prices first'},
    {label:'Newest first'},
    {label:'Most popular first'}
  ];


  productCategory : IShopCategory;
  categories : IShopCategory[] = null;

  productList : IProduct[]; 


  constructor(
    private route : ActivatedRoute,
    private _context : ContextService
  ) { }

  ngOnInit() {
    this.loadProducts();
    this.loadCategories();
    this.selectCurrentPageCategory();
  }

  // SETUP
  loadProducts(){
    this._context.getShopProducts((products)=>this.productList=products);
  }

  loadCategories(){
    this._context.getShopCategories((categories)=>this.categories = categories);
  }

  selectCurrentPageCategory(){
    this.route.params.subscribe(
      params => {
        if(!params['slug']) return;
        this._context.getShopCategoryFromSlug(params['slug'], (category : IShopCategory) => {
          this.productCategory = category;
          console.log(`🛒 Shopping category : ${this.productCategory.label}`);
        });
      }
    );
  }



  // FILTER EVENT HANDLERS =>
  startSearchFromTerm(searchTerm : string){
    console.log(`🛒 Searching for '${searchTerm}'`);
  }

  goToProductPage(searchObject : any){
    console.log(`🛒 Product picked from autofill : '${searchObject.label}'`);
  }
  
  startSearchFromCategories(categories : any[]){
    categories.map(category =>{
      console.log(`🛒 Categories picked : '${category.label}'`);
    })
  }

  startSearchFromPrice(range : IRange){
    console.log(`🛒 Price range is [${range.min} ${range.max}]`);
  }

  pickedSortingOption(sorting : any){
    console.log(`🛒 Sorting picked : '${sorting.label}'`);
  }

}

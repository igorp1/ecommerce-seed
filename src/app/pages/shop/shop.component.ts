import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  productCategory : any;

  categories : any[] = [
    {label:'👋🏾 Hello', slug:'hello'},
    {label:'💮 Saito Sensei Favorites', slug:'recommended'},
    {label:'🎉 On Sale', slug:'sale'},
    {label:'🤑 Under $20', slug:'under-20'},
  ]

  constructor(
    private route : ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        let slugCategory = this.categories.filter( x=>x.slug=== params['slug']);
        if(slugCategory.length == 0){
          this.productCategory = {label:'404'}
        }
        else{
          this.productCategory = slugCategory[0]
        }
        console.log(`🛒 Shopping category : ${this.productCategory.label}`)
      }
    )
  }

  // FILTER EVENT HANDLERS =>
  startSearchFromCategory(category : any){
    console.log(`🛒 Searching for '${category.label}'`);
  }

  startSearchFromTerm(searchTerm : string){
    console.log(`🛒 Searching for '${searchTerm}'`);
  }

  goToProductPage(searchObject : any){
    console.log(`🛒 Searching for '${searchObject.label}'`);
  }

}

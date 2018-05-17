import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  productCategory : string;

  constructor(
    private route : ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.productCategory = params['slug'];
        console.log(`🛒 Shopping category : ${this.productCategory}`)
      }
    )
  }

  startSearchFromTerm(searchTerm : string){
    console.log(`🛒 Searching for '${searchTerm}'`);
  }

  goToProductPage(searchObject : any){
    console.log(`🛒 Searching for '${searchObject.label}'`);
  }

}

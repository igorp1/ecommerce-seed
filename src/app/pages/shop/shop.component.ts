import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Range } from '../../components/range-picker/range-picker.component';
import { IProduct } from '../../models/product.models';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  productCategory : any;

  categories : any[] = [
    {label:'👋🏾 Hello', slug:'hello'},
    {label:'💮 Sato Sensei Favorites', slug:'recommended'},
    {label:'🎉 On Sale', slug:'sale'},
    {label:'🤑 Under $20', slug:'under-20'},
  ]

  sortOptions : any[] = [
    {label:'Lowest prices first'},
    {label:'Highest prices first'},
    {label:'Newest first'},
    {label:'Most popular first'}
  ]

  loadingProducts : boolean = false;

  // productList : IProduct[] = [
  //   {id: '0', slug:'peace-incense', description:'hola', quantity:0, stockQuantity:10, categories:[], name:'Peace Freedom Vitality Sandalwood Incense', images:['https://images.urbanoutfitters.com/is/image/UrbanOutfitters/43797539_070_b?$xlarge$&hei=900&qlt=80&fit=constrain'], price: 20, salePrice: 15},
  //   {id: '0', slug:'sometsuke-bowl', description:'hola', quantity:0, stockQuantity:0, categories:[], name:'Sometsuke Bowl', images:['http://www.japanpotterynet.com/en/upload/save_image/0030276.jpg'], price: 20, salePrice: 15},
  //   {id: '0', slug:'gyutou-knife', description:'hola', quantity:0, stockQuantity:10, categories:this.categories, name:'Gyutou Knife', images:['https://www.teruyasu.net/products/pcategorym/deba_s.jpg'], price: 100},
  //   {id: '0', slug:'pocky', description:'hola', quantity:0, stockQuantity:10, categories:[], name:'Pocky', images:['https://www.blippo.com/media/catalog/product/cache/4/thumbnail/9df78eab33525d08d6e5fb8d27136e95/2/0/20130315_125_1.jpg'], price: 10},
  // ]


  constructor(
    private route : ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        if(!params['slug']) return;
        let slugCategory = this.categories.filter( x=>{
          if(x.slug === params['slug']) {
            x.selected = true; 
            return x;
          }
        });
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
  startSearchFromTerm(searchTerm : string){
    console.log(`🛒 Searching for '${searchTerm}'`);
  }

  goToProductPage(searchObject : any){
    console.log(`🛒 Product picked from autofill : '${searchObject.label}'`);
  }
  
  startSearchFromCategories(categories : any[]){
    this.loadingProducts = true;
    categories.map(category =>{
      console.log(`🛒 Categories picked : '${category.label}'`);
    })
  }

  startSearchFromPrice(range : Range){
    console.log(`🛒 Price range is [${range.min} ${range.max}]`);
  }

  pickedSortingOption(sorting : any){
    console.log(`🛒 Sorting picked : '${sorting.label}'`);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContextService } from '../../services/context.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(
    private route : ActivatedRoute,
    private _context : ContextService,
    private sanitizer: DomSanitizer
  ) { }

  product : Product;
  productView : "side-by-side" | "stacked" = "stacked";


  ngOnInit() {
    this.loadProduct();
  }

  loadProduct(){
    this.route.params.subscribe(params => {
      const productSlug = params['slug'];
      console.log(`🛒 Seeing product : ${productSlug}`)

      this.product = new Product();
      this.product.name = 'Natural Buddhist Sandalwood Incense';
      this.product.slug = productSlug;
      this.product.price = 6.99;
      this.product.description = `
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.
      `;
      this.product.categories = [
        "New", "Under $20"
      ];
      this.product.salePrice = 4.22;

      this.product.images =[
        "https://static.wixstatic.com/media/f53a9d_71861f907c30416cb25c2a9ee7ca603f~mv2.jpg/v1/fill/w_498,h_267,al_c,q_90/file.jpg",
        "https://ae01.alicdn.com/kf/HTB1VqUIPVXXXXcGaXXXq6xXFXXXl/Buddhism-Gifts-Fine-Copper-Incense-Buddhist-Solemn-Temple-Decoration-Incense-Burners-for-Consecrate-Buddha-Propitious-Censer.jpg_640x640.jpg",
        "http://www.japanese-incense.com/subaro.jpg"
      ];
      
   });
    
  }

}

export class Product {

  id : string;
  slug : string;

  name : string;
  price : number;
  salePrice : number;
  images : Array<string> = new Array<string>();
  description : string;
  categories : string[];

  quantity : number = 0;
  quantityLimit : number;
  stockQuantity : number = 10;

  canPlusQuantity(){
    return this.quantityLimit === this.quantity ||
            this.stockQuantity === this.quantity;
  }
  plusQuantity(){
    if(this.canPlusQuantity()){ return; }
    this.quantity += 1;
  }

  canMinusQuantity(){
    return this.quantity === 0;
  }
  minusQuantity(){
    if(this.canMinusQuantity()){ return; }
    this.quantity -= 1;
  }

  addImageUrls(images :  string[]){

  }

}

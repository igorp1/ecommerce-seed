import { Injectable } from '@angular/core';

// Interfaces
import { IProduct } from '../pages/product/product.component';

// Services




@Injectable({
  providedIn: 'root'
})
export class ContextService {
  constructor() { }

  // ============== USABILITY VARS
  currency : string = 'USD';
  timezone : string = '';

  // ============== SIDE MENU
  sideMenuOpen : boolean = false;
  toggleMenu(val? : boolean){
    this.sideMenuOpen = val === undefined ? !this.sideMenuOpen : val;
  }

  // ============== CONTEXT MENU
  contextMenuActions : Array<IContextMenuAction>;
  contextMenuPosition : IContextMenuPosition;
  contextMenuOpen : boolean = false;
  openContextMenu(position : IContextMenuPosition, actions : Array<IContextMenuAction>){
    // setup necessary variables
    this.contextMenuActions = actions;
    this.contextMenuPosition = position;

    // stop scrolling
    let body = document.body;
    body.style.overflow = 'hidden';

    // trigger open
    this.contextMenuOpen = true;
  }

  closeContextMenu(){
    // cleanup variables
    this.contextMenuActions = null;
    this.contextMenuPosition = null;

    // re-enable scroll
    let body = document.body;
    body.style.overflow = 'scroll';
    
    // trigger close
    this.contextMenuOpen = false;
  }

  // ============== PRODUCT
  loadProductFromSlug(slug : string, callBack : (product : IProduct) => void ){

    // ~~~~~~~~~~ FIXME: implement a call to a service
    let productList : IProduct[] = [
      {id: '0', slug:'peace-incense', description:'hola', quantity:0, stockQuantity:10, categories:[], name:'Peace Freedom Vitality Sandalwood Incense', images:['https://images.urbanoutfitters.com/is/image/UrbanOutfitters/43797539_070_b?$xlarge$&hei=900&qlt=80&fit=constrain','https://ae01.alicdn.com/kf/HTB1J86UKXXXXXbZXFXXq6xXFXXXK/Purple-Clay-Incense-Burners-One-Of-The-Four-Auspicious-Animals-In-Ancient-China-Burner-Holder-Smoke.jpg_640x640.jpg'], price: 20, salePrice: 15},
      {id: '0', slug:'sometsuke-bowl', description:'hola', quantity:0, stockQuantity:0, categories:[], name:'Sometsuke Bowl', images:['http://www.japanpotterynet.com/en/upload/save_image/0030276.jpg'], price: 20, salePrice: 15},
      {id: '0', slug:'gyutou-knife', description:'hola', quantity:0, stockQuantity:10, categories:[], name:'Gyutou Knife', images:['https://www.teruyasu.net/products/pcategorym/deba_s.jpg'], price: 100},
      {id: '0', slug:'pocky', description:'hola', quantity:0, stockQuantity:10, categories:[], name:'Pocky', images:['https://www.blippo.com/media/catalog/product/cache/4/thumbnail/9df78eab33525d08d6e5fb8d27136e95/2/0/20130315_125_1.jpg'], price: 10},
    ];
    // ~~~~~~~~~~~ FIXME: eof

    if(!slug) { callBack(null); }
    else{
      let productArr : IProduct[] = productList.filter( x=>x.slug===slug);
      if(productArr.length === 0){ callBack(null); }
      else{
        callBack(productArr[0]);
      }
    }

  }

}

export interface IContextMenuPosition{
  left: number;
  top: number;
}
export interface IContextMenuAction{
  label: string;
  action: Function;
}


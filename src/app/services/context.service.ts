import { Injectable } from '@angular/core';

// Constants

// Models
import { Product, IProduct } from '../models/product.models';

// Services


@Injectable({
  providedIn: 'root'
})
export class ContextService {
  constructor( ) { }

  // ============== CONTEXT STATE TRANSFER
  dataInContext : any = null;
  sendDataToNextContext(data : any){
    this.dataInContext = data;
  }
  loadDataFromContext(clearContextData : boolean = true){
    const dataToReturn = this.dataInContext; 
    this.dataInContext = null;
    return dataToReturn;
  }
  persistData(dataKey : string, data : any){
    localStorage.setItem(dataKey, JSON.stringify(data));
  }
  loadPersistedData(dataKey : string){
    let retrievedData = localStorage.getItem(dataKey);
    return JSON.parse(retrievedData);
  }

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

  // ~~~~~~~~~~ FIXME: implement call to service
  loadProductFromSlug(productSlug : string, callBack : (product : Product) => void ){
    if(!productSlug) { callBack(null); }
    else{
      let product = new Product();
      product.name = 'Natural Buddhist Sandalwood Incense';
      product.slug = productSlug;
      product.price = 6.99;
      product.salePrice = 4.22;
      product.description = `Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.`.repeat(20) ;
      product.categories = [ "New", "Under $20" ];

      product.images = [
        {imageUrl:"https://static.wixstatic.com/media/f53a9d_71861f907c30416cb25c2a9ee7ca603f~mv2.jpg/v1/fill/w_498,h_267,al_c,q_90/file.jpg", displayType: 'contain' },
        {imageUrl:"https://ae01.alicdn.com/kf/HTB1VqUIPVXXXXcGaXXXq6xXFXXXl/Buddhism-Gifts-Fine-Copper-Incense-Buddhist-Solemn-Temple-Decoration-Incense-Burners-for-Consecrate-Buddha-Propitious-Censer.jpg_640x640.jpg", displayType: 'cover' },
        {imageUrl:"http://www.japanese-incense.com/subaro.jpg", displayType: 'cover' }
      ];
      callBack(product);
    }
  }

  // ~~~~~~~~~~ FIXME: implement call to service
  loadProductInventory(callBack : (inventory : IProduct[]) => void ){
    const inventory : IProduct[] = [];

    inventory.push({
      id : '0',
      name : 'Natural Buddhist Sandalwood Incense',
      slug : 'incense',
      price : 6.99,
      salePrice : 4.22,
      quantity : 0,
      stockQuantity : 100,
      description : `Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.`.repeat(20) ,
      categories : [ "New", "Under $20" ],
      images : [
        {imageUrl:"https://static.wixstatic.com/media/f53a9d_71861f907c30416cb25c2a9ee7ca603f~mv2.jpg/v1/fill/w_498,h_267,al_c,q_90/file.jpg", displayType: 'contain' },
        {imageUrl:"https://ae01.alicdn.com/kf/HTB1VqUIPVXXXXcGaXXXq6xXFXXXl/Buddhism-Gifts-Fine-Copper-Incense-Buddhist-Solemn-Temple-Decoration-Incense-Burners-for-Consecrate-Buddha-Propitious-Censer.jpg_640x640.jpg", displayType: 'cover' },
        {imageUrl:"http://www.japanese-incense.com/subaro.jpg", displayType: 'cover' }
      ]
    }); 
    


    callBack(inventory);

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


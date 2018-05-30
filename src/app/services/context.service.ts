import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// Models
import { Product, IProduct } from '../models/product.models';
import { MenuItemConfig } from '../models/menu.models';
import { ModalConfig } from '../models/modal.models';
import { IShopCategory } from '../models/shop.models';
import { IContextMenuAction, IContextMenuPosition } from '../models/contextmenu.models';

// Services
import { AuthService } from './auth.service';
import { CartService } from './cart.service';
import { InventoryService } from './inventory.service';
import { OrdersService } from './orders.service';
import { ShopService } from './shop.service';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class ContextService {

  constructor(
    private router : Router,
    private authService : AuthService,
    private cartService : CartService,
    private inventoryService_admin : InventoryService,
    private ordersService_admin : OrdersService,
    private shopService : ShopService,
    private userService : UserService
  ) { }

  // ============== CONTEXT STATE TRANSFER
  dataInContext : any = null;
  sendDataToNextContext(data : any) : void {
    this.dataInContext = data;
  }
  getDataFromContext(clearContextData : boolean = true) : any{
    const dataToReturn = this.dataInContext; 
    this.dataInContext = null;
    return dataToReturn;
  }
  persistData(dataKey : string, data : any) : void{
    localStorage.setItem(dataKey, JSON.stringify(data));
  }
  getPersistedData(dataKey : string) : any{
    let retrievedData = localStorage.getItem(dataKey);
    return JSON.parse(retrievedData);
  }

  // ============== USABILITY VARS
  currency : string = 'USD';
  timezone : string = '';

  // ============== SIDE MENU
  sideMenuOpen : boolean = false;
  sideMenuCongif : { title: string, footer : string, menuItems : MenuItemConfig[] } = {
    title : 'Menu',
    menuItems: [
      {label: 'Home', action: ()=>{ this.router.navigateByUrl('/') }},
      {label: 'About', action: ()=>{ this.router.navigateByUrl('/about') }},
      {label: 'Shop Now!', subMenuExpanded:true, subMenu : [
        {label: 'Explore', action: ()=>{ this.router.navigateByUrl('/shop') } },
        // FIXME: should include product categories
      ]}
    ],
    footer : `${window.location.hostname} ${(new Date()).getFullYear()}`
  }
  toggleMenu(val? : boolean) : void {
    this.sideMenuOpen = val === undefined ? !this.sideMenuOpen : val;
  }

  // ============== CONTEXT MENU
  contextMenuActions : Array<IContextMenuAction>;
  contextMenuPosition : IContextMenuPosition;
  contextMenuOpen : boolean = false;
  openContextMenu(position : IContextMenuPosition, actions : Array<IContextMenuAction>) : void {
    // setup necessary variables
    this.contextMenuActions = actions;
    this.contextMenuPosition = position;

    // stop scrolling
    let body = document.body;
    body.style.overflow = 'hidden';

    // trigger open
    this.contextMenuOpen = true;
  }

  closeContextMenu() : void {
    // cleanup variables
    this.contextMenuActions = null;
    this.contextMenuPosition = null;

    // re-enable scroll
    let body = document.body;
    body.style.overflow = 'scroll';
    
    // trigger close
    this.contextMenuOpen = false;
  }

  // ============== MODAL
  modalIsOpen : boolean;
  modalConfig : ModalConfig;
  modalDataEmitted : (data : any) => void;
  openModal(modalConfig : ModalConfig, dataEmittedCallback? : (data : any) => void ) : void {
    this.modalConfig = modalConfig;
    this.modalDataEmitted = dataEmittedCallback;
    this.modalIsOpen = true;
  }


  // ============== PRODUCT
  // ~~~~~~~~~~ FIXME: implement call to service
  getProductFromSlug(productSlug : string, callBack : (product : Product) => void ) : void {
    if(!productSlug) { callBack(null); }
    else{
      let product = new Product();
      product.name = 'Buddhist Incense';
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
  getProductInventory(callBack : (inventory : IProduct[]) => void ) : void {
    const inventory : IProduct[] = [];

    inventory.push({
      id : '0',
      name : 'Buddhist Incense',
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

  // ============== SHOP
  // ~~~~~~~~~~ FIXME: implement call to service
  loadedShopCategories : IShopCategory[] = null;
  getShopCategories(callBack : ( shopCategories : IShopCategory[]) => void ) : void {
    let categories : IShopCategory[] = [
      {label:'👋🏾 Hello', slug:'hello'},
      {label:'💮 Sato Sensei Favorites', slug:'recommended'},
      {label:'🎉 On Sale', slug:'sale'},
      {label:'🤑 Under $20', slug:'under-20'},
    ];
    if(this.loadedShopCategories === null){
      // ~~~~~~~~~~ FIXME: implement call to service
      this.loadedShopCategories = categories;
    }
    else{
      this.loadedShopCategories = categories;
    }
    callBack(this.loadedShopCategories);
  }

  getShopCategoryFromSlug( slug : string, callback: (category : IShopCategory)=> void ) : void {

    this.getShopCategories((categories) => {

      const slugCategoryFilteredArr = categories.filter( category => category.slug === slug ); 
      if(slugCategoryFilteredArr.length == 0){
        callback(null);
      }
      else{
        const category = slugCategoryFilteredArr[0];
        callback(category);
      }

    });
    
  }

  // ~~~~~~~~~~ FIXME: implement call to service
  getShopProducts(callback : (products : Product[]) => void ) : void{

    let productArray = new Array<Product>(); 
    
    for(let ii=0; ii < 10; ii++ ){
      let product = new Product();
      product.name = 'Buddhist Incense';
      product.slug = 'incense';
      product.price = 6.99;
      product.salePrice = 4.22;
      product.description = `Each incense is made from natural wood substrate and essential oil in an artisan community in the south of China.`.repeat(20) ;
      product.categories = [ "New", "Under $20" ];

      product.images = [
        {imageUrl:"https://static.wixstatic.com/media/f53a9d_71861f907c30416cb25c2a9ee7ca603f~mv2.jpg/v1/fill/w_498,h_267,al_c,q_90/file.jpg", displayType: 'contain' },
        {imageUrl:"https://ae01.alicdn.com/kf/HTB1VqUIPVXXXXcGaXXXq6xXFXXXl/Buddhism-Gifts-Fine-Copper-Incense-Buddhist-Solemn-Temple-Decoration-Incense-Burners-for-Consecrate-Buddha-Propitious-Censer.jpg_640x640.jpg", displayType: 'cover' },
        {imageUrl:"http://www.japanese-incense.com/subaro.jpg", displayType: 'cover' }
      ];

      productArray.push(product);
      
    }

    callback(productArray);
  }

  // ============== CART
  cartItemsCount() : number{
    return this.cartService.products.length;
  }

}



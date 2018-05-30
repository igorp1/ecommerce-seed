import { Component, OnInit } from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { ContextService } from '../../services/context.service';
import { Router } from '@angular/router';
import { MenuItemConfig } from '../../models/menu.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  COLAPSE_ON_SCROLL_TRESH : number = 20;
  headerCollapsed : boolean;

  isBrowser : boolean;

  // config
  logo_small : string = "assets/whitelabel-logo.png";   // aspect ratio : square
  logo_large : string = "assets/whitelabel-baner.png";  // aspect ratio : fb banner
  siteTitle : string = "e-commerce seed";
  
  menuItems : MenuItemConfig[] = [
    {label:'ADMIN', action: ()=>{this.router.navigateByUrl('admin')}, shouldShow : ()=>false  }, // TODO: check user roles
    {label:'ABOUT', action: ()=>{this.router.navigateByUrl('about')} },
    {label:'SHOP', action: ()=>{this.router.navigateByUrl('shop')}, subMenu: [ // FIXME: add categories here
      {label:'🎉 On Sale', action: ()=>{this.router.navigateByUrl('/shop/sale')} },
      {label:'💮 Recommended', action: ()=>{this.router.navigateByUrl('/shop/recommended')} },
      {label:'🤑 Save Money', action: ()=>{this.router.navigateByUrl('/shop/sale')} },

    ]},
    {label:'PROFILE', action: ()=>{this.router.navigateByUrl('profile')} },
  ]

  constructor(
    @Inject(PLATFORM_ID) private  platformId : Object,
    private _context : ContextService,
    private router : Router,
  ) { 
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if(this.isBrowser) window.addEventListener('scroll', this.scroll, true);
  }

  ngOnDestroy() {
    if(this.isBrowser) window.removeEventListener('scroll', this.scroll, true);
  }

  scroll : EventListener = (e) : void => {
    if(this.isBrowser) this.headerCollapsed = window.scrollY >= this.COLAPSE_ON_SCROLL_TRESH;
  };

  openMenu : Function = () : void => {
    this._context.toggleMenu(true)
  }

  executeAction(action : ()=>void ){
    action();
    return false; // prevent click to propagate
  }

}

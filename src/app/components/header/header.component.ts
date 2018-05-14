import { Component, OnInit } from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { ContextService } from '../../services/context.service';

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
  logo : string = "assets/whitelabel-logo.png";
  siteTitle : string = "e-commerce seed" 

  constructor(
    @Inject(PLATFORM_ID) private  platformId : Object,
    private _context : ContextService
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

}

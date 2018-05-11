import { Component, OnInit } from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  COLAPSE_ON_SCROLL_TRESH : number = 20;
  headerCollapsed : boolean;

  isBrowser : boolean;

  logo : string = "https://vectr.com/idp/f3RoW0TgGR.svg?width=640&height=640&select=f3RoW0TgGRpage0";

  constructor(
    @Inject(PLATFORM_ID) private  platformId : Object
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

}

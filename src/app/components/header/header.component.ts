import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  COLAPSE_ON_SCROLL_TRESH : number = 20;
  headerCollapsed : Boolean;

  logo : string = "https://vectr.com/idp/f3RoW0TgGR.svg?width=640&height=640&select=f3RoW0TgGRpage0";

  constructor() { }

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);
  }

  ngOnDestroy() {
      window.removeEventListener('scroll', this.scroll, true);
  }

  scroll : EventListener = (e) : void => {
    this.headerCollapsed = window.scrollY >= this.COLAPSE_ON_SCROLL_TRESH;
  };

}

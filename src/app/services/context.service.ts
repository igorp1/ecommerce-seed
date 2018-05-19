import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContextService {
  constructor() { }

  // USABILITY VARS
  currency : string = 'USD';
  timezone : string = '';

  // SIDE MENU
  sideMenuOpen : boolean = false;
  toggleMenu(val? : boolean){
    this.sideMenuOpen = val === undefined ? !this.sideMenuOpen : val;
  }

  // CONTEXT MENU
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

}

export interface IContextMenuPosition{
  left: number;
  top: number;
}
export interface IContextMenuAction{
  label: string;
  action: Function;
}


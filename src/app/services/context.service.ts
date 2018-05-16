import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  // CONTROL VARIABLES
  sideMenuOpen : boolean = false;

  // USABILITY VARS
  currency : string = 'USD';
  timezone : string = '';

  constructor() { }

  toggleMenu(val? : boolean){
    this.sideMenuOpen = val === undefined ? !this.sideMenuOpen : val;
  }


}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  // CONTROL VARIABLES
  sideMenuOpen : boolean = false;



  constructor() { }

  toggleMenu(val? : boolean){
    this.sideMenuOpen = val === undefined ? !this.sideMenuOpen : val;
  }


}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() isOpen : boolean = false;
  @Output() isOpenChange : EventEmitter<boolean> = new EventEmitter<boolean>(); 

  @Input() menuItems : MenuItemsConfig[] = [
    {label: 'Home', action: ()=>{ this.router.navigateByUrl('/') }},
    {label: 'About', action: ()=>{ this.router.navigateByUrl('/about') }},
    {label: 'Special', subMenuExpanded:true, subMenu : [
      {label: 'yo', action:()=>{alert('🦖 yo')} },
      {label: 'test', action:()=>{alert('🎉 It works!!')} },  
    ]}
  ];

  ngOnInit() {  }

  closeSidePanel(){
    this.isOpen = false
    this.isOpenChange.emit(this.isOpen)
  }



}

export interface MenuItemsConfig{
  label : string,
  icon? : string,
  action? : Function,
  subMenuExpanded? : boolean,
  subMenu? : MenuItemsConfig[]
}

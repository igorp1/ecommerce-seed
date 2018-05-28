import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItemConfig } from '../../models/menu.models';

@Component({
  selector: 'side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() isOpen : boolean = false;
  @Output() isOpenChange : EventEmitter<boolean> = new EventEmitter<boolean>(); 

  @Input() title : string;
  @Input() footer : string;

  @Input() menuItems : MenuItemConfig[] = [
    {label: 'Home', action: ()=>{ this.router.navigateByUrl('/') }},
    {label: 'About', action: ()=>{ this.router.navigateByUrl('/about') }},
    {label: 'Special', subMenuExpanded:true, subMenu : [
      {label: 'Dinosaur', action:()=>{alert('🦖 It works!')} },
      {label: 'Tako', action:()=>{alert('🐙 It works!')} }
    ]}
  ];

  ngOnInit() {  }

  closeSidePanel(){
    this.isOpen = false
    this.isOpenChange.emit(this.isOpen)
  }

}



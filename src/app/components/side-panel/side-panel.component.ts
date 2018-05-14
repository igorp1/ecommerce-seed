import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {

  constructor(private router: Router) { }

  open : boolean = false;

  @Input() menuItems : MenuItemsConfig[] = [
    {label: 'Home', action: ()=>{ this.router.navigateByUrl('/') }},
    {label: 'About', action: ()=>{ this.router.navigateByUrl('/about') }},
    {label: 'Special', subMenuExpanded:true, subMenu : [
      {label: 'yo', action:()=>{alert('🦖 yo')} },
      {label: 'test', action:()=>{alert('🎉 It works!!')} },  
    ]}
  ];

  expandThing = true;

  ngOnInit() {

    setTimeout(()=>{
      this.open = true
    }, 1000)

  }




}

export interface MenuItemsConfig{
  label : string,
  icon? : string,
  action? : Function,
  subMenuExpanded? : boolean,
  subMenu? : MenuItemsConfig[]
}

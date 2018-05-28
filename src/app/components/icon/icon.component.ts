import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() name : string;

  iconList = { 
    basket : 'assets/icons/shopping_bag.svg',
  }


  constructor() { }

  ngOnInit() {
  }

}

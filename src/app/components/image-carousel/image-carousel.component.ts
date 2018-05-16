import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DragScrollDirective } from 'ngx-drag-scroll';

@Component({
  selector: 'image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent implements OnInit {

  @Input() images : Array<string>;
  @Input() imgHeight : string;
  

  constructor() { }

  ngOnInit() {
  }


  leftNavDisabled : boolean = false;
  rightNavDisabled : boolean = true;
  @ViewChild('nav', {read: DragScrollDirective}) ds: DragScrollDirective;


  clickItem(index, imageUrl) {
    console.log(`Clicked on item #${index} (${imageUrl})`)
  }

  remove() {
    this.images.pop();
  }

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

  leftBoundStat(reachesLeftBound: boolean) {
    this.leftNavDisabled = reachesLeftBound;
  }

  rightBoundStat(reachesRightBound: boolean) {
    this.rightNavDisabled = reachesRightBound;
  }

}

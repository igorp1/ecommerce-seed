import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'on-fire',
  templateUrl: './on-fire.component.html',
  styleUrls: ['./on-fire.component.scss']
})
export class OnFireComponent implements OnInit {

  min: number = 22;
  max: number = 65;
  amountOfPeople : number = Math.floor(Math.random() * this.max) + this.min  ;

  constructor() { }

  ngOnInit() {
  }



}

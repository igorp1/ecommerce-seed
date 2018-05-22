import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'text-section-display',
  templateUrl: './text-section-display.component.html',
  styleUrls: ['./text-section-display.component.scss']
})
export class TextSectionDisplayComponent implements OnInit {

  @Input() section : TextSection;

  constructor() { }

  ngOnInit() {
  }

}

export interface TextSection {
  title : string;
  text : string;
  actionLinks? : ActionLink[];
}

export interface ActionLink {
  label : string;
  action : (input : any) => void;
}
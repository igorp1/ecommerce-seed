import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'options-picker',
  templateUrl: './options-picker.component.html',
  styleUrls: ['./options-picker.component.scss']
})
export class OptionsPickerComponent implements OnInit {

  @Input() title : string;
  @Input() options : any[]; // <~~ must have label

  @Output() picked : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    setTimeout(()=>{ this.picked.emit({label:"Sato-sensei recommends"}) }, 2000);
  }



}

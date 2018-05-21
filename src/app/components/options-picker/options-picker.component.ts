import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'options-picker',
  templateUrl: './options-picker.component.html',
  styleUrls: ['./options-picker.component.scss']
})
export class OptionsPickerComponent implements OnInit {

  @Input() title : string;
  @Input() options : any[]; // <~~ must have label
  @Input() singlePick : boolean;

  @Input() shouldDebounce : boolean = false; // <~~ helps whe pickig multiple options 
  @Input() debouncePeriod : number = 1500;

  @Output() picked : EventEmitter<any> = new EventEmitter<any>();

  debouncing : boolean = false;

  constructor() { }

  ngOnInit() { }

  singleOptionPicked(option){
    this.options.map(x=>x.selected=false);
    option.selected = true;
    this.picked.emit(option);
  }

  optionPicked(option){
    if(this.shouldDebounce){
      if(!this.debouncing){
        setTimeout( ()=>{this.emitPicked()}, this.debouncePeriod );
        this.debouncing = true;
      }
    }
    else{
      this.emitPicked();
    }
  }

  emitPicked(){
    const pickedOptions = this.options.filter(x=>x.selected);
    this.picked.emit(pickedOptions);
    this.debouncing = false;
  }


}

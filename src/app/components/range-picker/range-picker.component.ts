import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IRange } from '../../models/common.models';

@Component({
  selector: 'range-picker',
  templateUrl: './range-picker.component.html',
  styleUrls: ['./range-picker.component.scss']
})
export class RangePickerComponent implements OnInit {

  @Input() title: string = 'Price Range';
  @Input() isCurrency : boolean = false;
  @Input() mustBePositive : boolean = true;

  @Input() min : string;
  @Input() max : string;

  @Output() rangeSelectedEvent : EventEmitter<IRange> = new EventEmitter<IRange>();

  @Input() suggestedRanges : IRange[] = [
    {min:10, max:20},
    {min:30, max:50},
    {min:50, max:100}
  ]

  warningMsg : string;
  minWarning : boolean;
  maxWarning : boolean;
  valuesOk : boolean;

  constructor() { }

  ngOnInit() {
  }

  inputChange(){
    if(this.warningMsg){
      this.isDatavalid()
    }
  }

  inputBlur(e){
    this.isDatavalid()
  }
  
  validateAndEmitData(){
    // check if data exists =>
    if(!this.min && !this.max){
      this.noWarnings()
      return;
    } 
    // check if data is valid and emit it=>
    if(this.isDatavalid()){
      this.rangeSelectedEvent.emit({
        min: +this.min,
        max: +this.max
      })
      this.valuesOk = true;
      setTimeout(()=>{this.valuesOk = false;}, 600 );
    }
  }

  noWarnings(){
    this.warningMsg = '';
    this.minWarning = false;
    this.maxWarning = false;
  }

  isDatavalid(){
    const reg = /^-?\d*\.?\d*$/;

    if(this.min){
      // check if numbers
      if(!this.min.match(reg)){
        this.warningMsg = 'The min value must be a number';
        this.minWarning = true;
        return false;
      }
      if(this.mustBePositive && +this.min < 0){
        this.warningMsg = 'The min value must be positive';
        this.minWarning = true;
        return false
      }
    }

    if(this.max){
      // check if numbers
      if(!this.max.match(reg)){
        this.warningMsg = 'The max value must be a number';
        this.maxWarning = true;
        return false;
      }
      if(this.mustBePositive && +this.max < 0){
        this.warningMsg = 'The max value must be positive';
        this.maxWarning = true;
        return false
      }
    }

    if(this.min && this.max){
      if(+this.min > +this.max){
        this.warningMsg = 'The min can\'t be greater than or equal to the max';
        this.minWarning = true;
        this.maxWarning = true;
        return false;
      }
    }

    this.noWarnings()
    return true;
    
  }

  rangeChosen(range : IRange){
    this.rangeSelectedEvent.emit(range);
  }

  pickCustomRange(){
    if(!this.min){
      this.warningMsg = 'The min value cannot be empty';
      this.minWarning = true;
      return;
    }
    if(!this.max){
      this.warningMsg = 'The max value cannot be empty';
      this.maxWarning = true;
      return;
    }
    this.validateAndEmitData()
  }
  
}


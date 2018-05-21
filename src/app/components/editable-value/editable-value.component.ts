import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'editable-value',
  templateUrl: './editable-value.component.html',
  styleUrls: ['./editable-value.component.scss']
})
export class EditableValueComponent implements OnInit {

  /*

  TODO: hit enter to commit value
  TODO: valueModifiedEvent

  */

  // THE EDITABLE VALUE
  @Input() model : string;
  @Output() modelChange : EventEmitter<string> = new EventEmitter<string>();

  @Input() validationFunction : (value:string) => [boolean, string] = (s)=>[true, null];  // <~~~ returns true, valid or false, not valid. string is user hint if false  

  @ViewChild('input') inputElement : ElementRef;

  draftModel : string;
  valueWarn : string;
  isEditing : boolean;

  constructor() { }

  ngOnInit() {
  }

  startEdit(){
    this.draftModel = this.model;
    this.isEditing = true;
    setTimeout(()=>{this.inputElement.nativeElement.focus()}, 0);
  }

  doneEdit(confirmed : boolean){
    if( confirmed ){
      let validationResult = this.validationFunction(this.draftModel);
      if(validationResult[0]){
        this.model = this.draftModel;
        this.draftModel = null;
        this.modelChange.emit(this.model);
        this.isEditing = false;
      } else{
        this.valueWarn = validationResult[1];
      }   
    }
    else{
      this.draftModel = null;
      this.isEditing = false;
    }

  }


}

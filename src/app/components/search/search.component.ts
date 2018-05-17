import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'search-input',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  // will emit when a value is chosen from autocomplete
  @Output() chosenValue : EventEmitter<any> = new EventEmitter<any>(); 

  // will emit when user hits enter on search
  @Output() chosenSearchTerm : EventEmitter<string> = new EventEmitter<string>();

  currentInput : string;
  autoComplete : any[] = []; // <~~ objects must have a "LABEL" key
  autoCompleteIndexOnFocus : number = -1;

  @ViewChild('input') inputElement : any;
  
  // CTRL VALUES  
  openSearch : boolean = false;
  hideAutoComplete : boolean = false;

  constructor() { }

  ngOnInit() { }

  // SETUP =>
  startSearching(){
    this.openSearch = true;
    setTimeout(()=>{this.inputElement.nativeElement.focus()}, 0);
  }

  resetSearchElement(){
    this.autoCompleteIndexOnFocus = -1;
    this.autoComplete = [];
    this.currentInput = '';
    this.openSearch = false;

  }

  // KEY DETECTION =>
  onSearchChange(e){
    this.autocompleteSearch(this.currentInput);
  }

  detectKeys(e){
    switch(e.key){
      case 'Enter':
        this.submit();
        break;
      case 'ArrowDown':
        this.moveDownOnAutoComplete();
        break;
      case 'ArrowUp':
        this.moveUpOnAutoComplete();
        break;
      case 'ArrowRight':
        this.submit();
      case 'Escape':
        this.resetSearchElement()
    }
  }

  // AUTOCOMPLETE CTRL
  moveDownOnAutoComplete(){
    this.autoCompleteIndexOnFocus += 1;
    this.autoCompleteIndexOnFocus = this.autoCompleteIndexOnFocus % this.autoComplete.length
  }

  moveUpOnAutoComplete(){
    if(this.autoCompleteIndexOnFocus === 0)
      this.autoCompleteIndexOnFocus = this.autoComplete.length;
    this.autoCompleteIndexOnFocus -= 1;
  }

  autocompleteSearch(searchTer : string){
    this.autoCompleteIndexOnFocus = -1;
    this.autoComplete = [
      {'label': `${this.currentInput}xyz`, id:0},
      {'label': `${this.currentInput}123`, id:0},
      {'label': `${this.currentInput}abc`, id:0},
    ]; 
  }

  detectBlur(e){
    this.hideAutoComplete = true;
  }

  detectFocus(e){
    this.hideAutoComplete = false;
  }

  // EXECUTE SEARCH
  submit(){
    if(this.autoCompleteIndexOnFocus === -1){
      this.searchFromInput(this.currentInput);
    }
    else{
      this.chooseFromAutoComplete( this.autoComplete[this.autoCompleteIndexOnFocus] );
    }
  }  

  searchFromInput(input : string){
    this.chosenSearchTerm.emit(input)
  }

  chooseFromAutoComplete(object: any){
    this.chosenValue.emit(object);
  }

}

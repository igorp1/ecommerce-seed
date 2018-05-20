import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'plus-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input()
  data: Array<any>;

  @Input()
  metadata : any;

  @Output() rowClickedEvent = new EventEmitter();

  constructor() { }

  ngOnInit() { } 

  rowClicked(rowItem : any) {
    this.rowClickedEvent.emit(rowItem);
  }

  index(row, key){

    if(key instanceof Array){
      let val = row
      key.forEach(k=> val = val[k] )
      return val
    }
    else{
      return row[key]
    }

  }

}

export interface ITableColumn{
  name : string;
  title? : string;
  dataType : 'text' | 'dateTime' | 'money' ;
}

export interface ITableMetadata{
  columns : Array<ITableColumn>;
  hideHeader? : boolean;
}

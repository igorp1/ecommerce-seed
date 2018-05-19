import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { IContextMenuAction, IContextMenuPosition, ContextService } from '../../services/context.service';

@Component({
  selector: 'context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss']
})
export class ContextMenuComponent implements OnInit {

  _show : boolean;
  @Input() 
  set show(value: boolean) {
    if(value === true){
      setTimeout(()=>{this.setupMenuPosition()},0);
    }
    else{
      this._show = value;
    }
  }
  get show(): boolean {
     return this._show;
  }

  @ViewChild("menuDiv") menuDiv: ElementRef ;

  @Input() showChange : EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() actions : IContextMenuAction[];

  constructor(private _context : ContextService) { }

  ngOnInit() {  }

  setupMenuPosition(){
    this.menuDiv.nativeElement.style.left = `${this._context.contextMenuPosition.left}px`;
    this.menuDiv.nativeElement.style.top = `${this._context.contextMenuPosition.top}px`;
    this._show = true;
  }

  executeAction(action : Function){
    action();
    this._context.closeContextMenu();
  }

}
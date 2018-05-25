import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() isOpen : boolean = true;
  @Output() isOpenChange : EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() config : ModalConfig;

  @Output() dataEmitter : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  cleanData(){
    // TODO: when you link with data inputs see if you need to do clean up
  }

  confirmExit(){
    this.dataEmitter.emit({ data:'OK'});
    this.closeModal();
  }

  cancelExit(){
    this.dataEmitter.emit(null);
    this.closeModal();
  }


  closeModal(){
    this.isOpen = false;
    this.isOpenChange.emit(this.isOpen);
  }

}

export interface ModalConfig{
  message : string,
  title? : string,
  cancelBtnLabel? : string,
  confirmBtnLabel? : string,
  alignLeft? : boolean
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() isOpen : boolean = true;
  @Output() isOpenChange : EventEmitter<boolean> = new EventEmitter<boolean>();

  modalClass : string = 'float';

  constructor() { }

  ngOnInit() {
  }

  closeModal(){
    this.isOpen = false;
    this.isOpenChange.emit(this.isOpen);
  }

}

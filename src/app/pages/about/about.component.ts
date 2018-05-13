import { Component, OnInit } from '@angular/core';
import { TransferState, makeStateKey, Title, Meta } from '@angular/platform-browser';

import { defaultWebTitle } from '../../app.constants';
import { ModalConfig } from '../../components/modal/modal.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  count : number = 0;

  modalConfig : ModalConfig = {
    title : "Test modal",
    message : "This is just a test modal",
    cancelBtnLabel : "Close", 
    confirmBtnLabel : "OK"
  };

  constructor(
    private titleService: Title,
  ) { }

  ngOnInit() {
    this.setTitle()
  }

  setTitle(){
    this.titleService.setTitle(`${defaultWebTitle} - About`);
  }

}

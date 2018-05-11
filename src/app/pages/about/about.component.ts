import { Component, OnInit } from '@angular/core';
import { TransferState, makeStateKey, Title, Meta } from '@angular/platform-browser';

import { defaultWebTitle } from '../../app.constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  count : number = 0;

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

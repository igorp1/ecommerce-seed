import { Component, OnInit } from '@angular/core';
import { TransferState, makeStateKey, Title, Meta } from '@angular/platform-browser';

import { defaultWebTitle, defaultWebMetas } from '../../app.constants';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  count : number = 0;

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit() {
  
    this.setTitle();
    this.addMetas();

  }

  setTitle(){
    this.titleService.setTitle(`${defaultWebTitle} - Home`);
  }

  addMetas(){
    defaultWebMetas.map(
      tag => this.metaService.addTag({name:tag.name, content:tag.content})
    )
  }

}

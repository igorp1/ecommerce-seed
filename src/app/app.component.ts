import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import { defaultWebTitle, defaultWebMetas } from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(
    private titleService: Title,
    private metaService: Meta
  ){ }

  ngOnInit(){
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

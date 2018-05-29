import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import { defaultWebTitle, defaultWebMetas } from './app.constants';
import { ContextService } from './services/context.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private _context : ContextService
  ){ }

  ngOnInit(){
    this.setTitle();
    this.addMetas();
  }

  setTitle(){
    this.titleService.setTitle(`${defaultWebTitle}`);
  }

  addMetas(){
    defaultWebMetas.map(
      tag => this.metaService.addTag({name:tag.name, content:tag.content})
    )
  }




}

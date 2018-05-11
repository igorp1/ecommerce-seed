import { Component, OnInit } from '@angular/core';
import { TransferState, makeStateKey, Title, Meta } from '@angular/platform-browser';

import { defaultWebTitle, defaultWebMetas } from '../../app.constants';
import { TestMockService } from '../../services/test.mock.service';

const DATA_NEWS_$ = makeStateKey('data');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  count : number = 0;
  news : any[];

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private stateTransfer: TransferState,
    private _testAPI : TestMockService
  ) { }

  ngOnInit() {
    this.initState();
    this.setTitle();
    this.addMetas();

  }

  initState(){
    this.news = this.stateTransfer.get(DATA_NEWS_$, null);
    if (!this.news) { this.loadNews() }
  }

  setTitle(){
    this.titleService.setTitle(`${defaultWebTitle} - Home`);
  }

  addMetas(){
    defaultWebMetas.map(
      tag => this.metaService.addTag({name:tag.name, content:tag.content})
    )
  }

  loadNews(){
    this._testAPI.getPopularNews(
      (news) => {
        const parsedNews = news.map( x => { return {title:x.title, url:x.url} } )
        this.news = parsedNews;
        this.stateTransfer.set(DATA_NEWS_$, parsedNews);
      }
    );
  }

}

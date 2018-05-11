import { Component, OnInit } from '@angular/core';
import { TransferState, makeStateKey, Title, Meta } from '@angular/platform-browser';

import { defaultWebTitle, defaultWebMetas } from '../../app.constants';
import { TestMockService } from '../../services/test.mock.service';

// const DATA_NEWS_$ = makeStateKey('data');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    // private titleService: Title,
    // private metaService: Meta,
    // private stateTransfer: TransferState,
    // private _testAPI : TestMockService
  ) { }

  ngOnInit() {  }


  // initState(){
  //   this.news = this.stateTransfer.get(DATA_NEWS_$, null);
  //   if (!this.news) { this.loadNews() }
  // }
  //
  // loadNews(){
  //   this._testAPI.getPopularNews(
  //     (news) => {
  //       const parsedNews = news.map( x => { return {title:x.title, url:x.url} } )
  //       this.news = parsedNews;
  //       this.stateTransfer.set(DATA_NEWS_$, parsedNews);
  //     }
  //   );
  // }

}

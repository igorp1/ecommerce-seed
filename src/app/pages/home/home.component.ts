import { Component, OnInit } from '@angular/core';
import { TransferState, makeStateKey, Title, Meta, DomSanitizer, SafeStyle } from '@angular/platform-browser';

import { defaultWebTitle, defaultWebMetas, homePageBannerImages, tagLine, homeFactList } from '../../app.constants';
import { TestMockService } from '../../services/test.mock.service';

// const DATA_NEWS_$ = makeStateKey('data');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bannerImages : SafeStyle[] = new Array<SafeStyle>();
  tagLine : string = tagLine;

  factList : Array<any> = homeFactList;

  constructor(
    private sanitizer : DomSanitizer,
    private mockService : TestMockService
  ) { }

  ngOnInit() {  
    this.sanitizeBannerImgUrl()
    this.runTests();
  }

  sanitizeBannerImgUrl(){
    homePageBannerImages.map((img)=>{
      const sanitizedImg = this.sanitizer.bypassSecurityTrustStyle(`url(${img})`);
      this.bannerImages.push(sanitizedImg);
    });
  }

  runTests(){
    // this.mockService.getHelloWorld(alert);
    this.mockService.testEcho({hello:"world"}, console.log);


  }


}



// ~~~~~~~~~~~~ SAVING THIS AS REFERENCE FOR NOW, it will be used later on

  // private titleService: Title,
  // private metaService: Meta,
  // private stateTransfer: TransferState,
  // private _testAPI : TestMockService


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
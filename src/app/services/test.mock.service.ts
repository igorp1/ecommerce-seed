import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable, Subject, throwError, of} from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestMockService {

  headers : Headers = new Headers();

  constructor(
    private http: Http
  ) {
    // this.headers.append('Access-Control-Allow-Origin', environment.sitehost);
  }

  getPopularNews(callBack : Function) {
    return this.http.get('https://api.nytimes.com/svc/mostpopular/v2/mostviewed/Business%20Day/1.json?api-key=1601e6b0f9774a6892b7c74d71e77d21')
      .pipe( 
        map( (data) => data.json() ),
        map( (data) => data.results )
      )
      .subscribe( data => callBack(data) )
  }

  getHelloWorld(callBack :  Function) {
    return this.http.get(`${environment.apiHost}/test/hello`)
      .pipe(
        map(data => data.json() )
      )
      .subscribe( data => callBack(data) );
  }

  testEcho(payload : any, callBack : Function) {
    return this.http.post(`${environment.apiHost}/test/echo`, payload)
      .pipe(
        map(data => data.json())
      )
      .subscribe( data => callBack(data) );
  }

}

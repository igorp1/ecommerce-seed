import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable, Subject, throwError, of} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestMockService {

  constructor(
    private http: Http
  ) { }

  getPopularNews(callBack : Function) {
    return this.http.get('https://api.nytimes.com/svc/mostpopular/v2/mostviewed/Business%20Day/1.json?api-key=1601e6b0f9774a6892b7c74d71e77d21')
      .pipe( 
        map( (data) => data.json() ),
        map( (data) => data.results )
      )
      .subscribe( data => callBack(data) )
  }

}

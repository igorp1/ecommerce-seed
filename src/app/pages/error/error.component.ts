import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContextService } from '../../services/context.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  currentError : string = '0';
  errorList = {
    '0' : { title: 'Oops!', explanation: 'Seems like we are having trouble at the moment, please try again soon. Sorry about the inconvinience!' },
    '404' : { title: '404', explanation: 'Oops, seems like the page you are looking for does not exist.' }
  }

  issueReported : boolean;

  constructor(
    private route : ActivatedRoute,
    private _context : ContextService
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params =>{
      if(params['code']){
        this.currentError = params['code'];
      }
    });
  }

  reportError(){
    // TODO: make this do something one day:
    this._context.openModal({
      title : 'Thank you!',
      message : 'Thanks for sending the error report, we are now investigating the issue.',
      confirmBtnLabel : 'OK'
    }, (data)=>{ this.issueReported = true; }  )
  }


}

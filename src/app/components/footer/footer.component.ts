import { Component, OnInit } from '@angular/core';
import { socialMediaLinks } from '../../app.constants';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  socialLinks = Object.keys(socialMediaLinks).map( k => { return { link:socialMediaLinks[k], img:k } } ) ;
  signupEmail : string;

  signup_text : string = "Only the best content, we promise :)";
  validationIssue : boolean;
  emailSubmitted : boolean;

  constructor() { }

  ngOnInit() {
  }

  emailSignup(){
    //this.validationIssue = true;
    console.log(`🛒 Saving email : ${this.signupEmail}`);
    this.emailSubmitted = true;
  }

}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email : string, password : string) : Observable<string>{/* TODO: */ return of('fake token'); }

  signUp(email : string, password : string, meta : any) : Observable<string>{/* TODO: */ return of('fake token');}

  isLoggedIn() : boolean { return false; }

  socialLogin(unknownStuff : any) : Observable<string>{/* TODO: */ return of('fake token'); }

  socialSignup(unknownStuff : any) : Observable<string>{/* TODO: */ return of('fake token'); }

}

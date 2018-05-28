import { Injectable } from '@angular/core';
import { IUser } from '../models/user.models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user : IUser;

  constructor() { }

  updateEmail(email : string) : Observable<boolean> { /* TODO: */ return of(true); }

  updateMeta(key : string, value : string) : Observable<boolean>  { /* TODO: */ return of(true); }

}

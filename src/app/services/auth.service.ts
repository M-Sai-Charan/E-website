import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router,
    private http:HttpClient
  ) {}

  login(user: User) {
    if (user.userName !== '' && user.emailAddress !== '' && user.passWord !== '' ) {
      this.loggedIn.next(true);
      this.router.navigate(['/products']);
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/']);
  }

 getUser(user: User) {
 }

}

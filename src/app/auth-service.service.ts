import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  loggedUser: string;

  constructor(public router: Router) {
    this.loggedUser = undefined;
  }

  checkIfLoggedIn(): boolean {
    if (localStorage.getItem('user')) {
      return true;
    }
    return false;
  }

  public login(user): void {
    localStorage.setItem('user', user);
    this.loggedUser = user;
  }

  public logout(): void {
    localStorage.clear();
    this.loggedUser = undefined;
  }
}

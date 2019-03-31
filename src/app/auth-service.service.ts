/* Service that handles authentication (login/logout) */

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {

  loggedUser: string;

  constructor(public router: Router) {
    this.loggedUser = undefined;
  }

  // Checks localStorage for user login info, returns result
  checkIfLoggedIn(): boolean {
    if (localStorage.getItem('user')) {
      return true;
    }
    return false;
  }

  // Store user login info
  public login(user): void {
    localStorage.setItem('user', user);
    this.loggedUser = user;
  }

  // Clear user login info
  public logout(): void {
    localStorage.clear();
    this.loggedUser = undefined;
  }
}

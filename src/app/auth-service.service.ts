import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  loggedUser: string;

  constructor(public router: Router) { }

  checkIfLoggedIn(): boolean {
    if (this.loggedUser) {
      return true;
    }
    return false;
  }

  login(): boolean {
    if(this.checkIfLoggedIn()) {
      // redirect to logout screen
      return false;
    }

    return true;
  }

  logout() {
    console.log("Logout");
  }
}

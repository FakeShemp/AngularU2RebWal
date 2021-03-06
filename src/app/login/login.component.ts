/* This component handles login/logout functionality */

import { Component, OnInit, Input } from '@angular/core';
import { AuthServiceService } from '../auth-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  @Input() loggedUser: string = '';

  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit() {
  }

  // Checks if logged in via authService
  checkIfLoggedIn() {
    return this.authService.checkIfLoggedIn();
  }

  // Communicates with authService to log user in
  login() {
    this.authService.login(this.loggedUser);
    this.loggedUser = '';
    this.router.navigate(['/dashboard'])
  }

  // Communicates with authService to log user out
  logout() {
    this.authService.logout();
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { AuthServiceService } from '../auth-service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() loggedUser: string = '';

  constructor(private authService: AuthServiceService) { }

  ngOnInit() {
  }

  checkIfLoggedIn() {
    return this.authService.checkIfLoggedIn();
  }

  login() {
    this.authService.login(this.loggedUser);
    this.loggedUser = '';
    //redirect to dashboard
  }

  logout() {
    this.authService.logout();
  }

}

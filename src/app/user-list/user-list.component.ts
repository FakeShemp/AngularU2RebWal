/*
This component keeps track of the list of childs (user-list-items) and also takes 
care of the button for toggling color.
*/

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() users: string[];
  toggle: boolean = false;
  
  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  // Toggle a boolean to signal color changes
  toggleColor() {
    this.toggle = !this.toggle;
  }

  // Sends color value string to children
  sendColor(): string {
    if (this.toggle) {
      return "pink";
    }
    return "lightgreen";
  }

  // Routes the user to the single user subpage
  navigate(user) {
    this.router.navigate(['/user', user]);
  }
}

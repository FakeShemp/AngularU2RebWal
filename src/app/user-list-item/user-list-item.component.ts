/*
This is one child of user-list, it keeps one user name and one color.
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() user: string;
  @Input() textColor: string;

  // Returns a style object of different colors depending on input
  getStyle(): Object {
    return { "color": this.textColor };
  }
}

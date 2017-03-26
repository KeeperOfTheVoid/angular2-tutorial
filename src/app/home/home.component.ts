import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  /*inputs: ["ninja"],*/
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "Welcome to the homepage...";

  /* Variables for Property Binding, Event Binding, 2-way Binding, Custom Event Binding */

  /*myString = "I like Chicken";
  myBoolean = true;
  ninja = {
  	name: "Yoshi",
  	belt: "Black"
  }

  alertMe(val) {
  	alert(val);
  }

  @Output() onYell = new EventEmitter();

  fireYellEvent(e) {
    this.onYell.emit(e);
  }*/

  constructor() { }

  ngOnInit() {
  }

}

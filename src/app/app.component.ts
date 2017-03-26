import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component' // Might not need this...

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  ninja = {
  	name: "Ryu",
  	belt: "Red"
  };

  yell(e) {
  	alert("I am yelling!!");
  }
}

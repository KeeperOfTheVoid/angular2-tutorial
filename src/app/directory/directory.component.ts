import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FilterPipe } from '../filter/filter.pipe';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  /* Route paramter */
  //ninja: string;
  ninjas = [
  	{ name: 'Yoshi', belt: 'black' },
  	{ name: 'Ryu', belt: 'red' },
  	{ name: 'Crystal', belt: 'purple' }
  ];

  constructor() {}

  // Route Params
  /*constructor(private route: ActivatedRoute) {
  	this.ninja = route.snapshot.params['ninja'] ;
  }*/

  ngOnInit() {
  }

}

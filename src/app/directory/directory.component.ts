import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FilterPipe } from '../filter/filter.pipe';

import { LoggingService } from '../service/logging.service';
import { NinjaService } from '../service/ninja.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers: [LoggingService]
})
export class DirectoryComponent implements OnInit {
  /* Route paramter */
  //ninja: string;
  ninjas = [];

  constructor(private logger: LoggingService, private ninjaSerice: NinjaService) {}

  logIt() {
  	this.logger.log();
  }

  // Route Params
  /*constructor(private route: ActivatedRoute) {
  	this.ninja = route.snapshot.params['ninja'] ;
  }*/

  ngOnInit() {
  	this.logger.logComponent('DirectoryComponent');
  	this.ninjas = this.ninjaSerice.getNinjas();
  }

}

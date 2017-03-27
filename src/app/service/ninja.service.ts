import { Injectable } from '@angular/core';

@Injectable()
export class NinjaService {

  getNinjas() {
  	  return [
  			{ name: 'Yoshi', belt: 'black' },
  			{ name: 'Ryu', belt: 'red' },
  			{ name: 'Crystal', belt: 'purple' }
  	  ]
  }

  constructor() { }

}

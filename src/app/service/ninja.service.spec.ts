import { TestBed, inject } from '@angular/core/testing';

import { NinjaService } from './ninja.service';

describe('NinjaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NinjaService]
    });
  });

  it('should ...', inject([NinjaService], (service: NinjaService) => {
    expect(service).toBeTruthy();
  }));
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SerieServiceService } from './serie-service.service';

describe('Service: SerieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SerieServiceService]
    });
  });

  it('should ...', inject([SerieServiceService], (service: SerieServiceService) => {
    expect(service).toBeTruthy();
  }));
});

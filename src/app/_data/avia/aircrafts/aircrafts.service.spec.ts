import { TestBed } from '@angular/core/testing';

import { AirplanesService } from './aircrafts.service';

describe('AirplanesService', () => {
  let service: AirplanesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirplanesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

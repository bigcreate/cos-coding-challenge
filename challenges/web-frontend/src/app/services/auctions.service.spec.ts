import {TestBed} from '@angular/core/testing';
import {AuctionsService} from './auctions.service';

describe('AuctionsService', () => {
  let service: AuctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuctionsService);
  });

  it('should return new value each 20 seconds', () => {
  });
});

import { TestBed } from '@angular/core/testing';

import { PixabayResolveService } from './pixabay-resolve.service';

describe('PixabayResolveService', () => {
  let service: PixabayResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PixabayResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

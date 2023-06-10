import { TestBed } from '@angular/core/testing';

import { ApiRickService } from './api-rick.service';

describe('ApiRickService', () => {
  let service: ApiRickService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRickService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

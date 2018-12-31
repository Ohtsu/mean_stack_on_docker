import { TestBed } from '@angular/core/testing';

import { GsectionService } from './gsection.service';

describe('GsectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GsectionService = TestBed.get(GsectionService);
    expect(service).toBeTruthy();
  });
});

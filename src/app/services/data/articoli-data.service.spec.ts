import { TestBed } from '@angular/core/testing';

import { ArticoliDataService } from './articoli-data.service';

describe('ArticoliDataService', () => {
  let service: ArticoliDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticoliDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

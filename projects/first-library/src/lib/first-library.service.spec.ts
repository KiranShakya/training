import { TestBed } from '@angular/core/testing';

import { FirstLibraryService } from './first-library.service';

describe('FirstLibraryService', () => {
  let service: FirstLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

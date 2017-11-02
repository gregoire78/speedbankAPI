import { TestBed, inject } from '@angular/core/testing';

import { DepenseService } from './depense.service';

describe('DepenseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DepenseService]
    });
  });

  it('should be created', inject([DepenseService], (service: DepenseService) => {
    expect(service).toBeTruthy();
  }));
});

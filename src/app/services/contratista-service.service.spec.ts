import { TestBed } from '@angular/core/testing';

import { ContratistaServiceService } from './contratista-service.service';

describe('ContratistaServiceService', () => {
  let service: ContratistaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratistaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

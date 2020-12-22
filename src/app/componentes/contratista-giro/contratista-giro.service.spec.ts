import { TestBed } from '@angular/core/testing';

import { ContratistaGiroService } from './contratista-giro.service';

describe('ContratistaGiroService', () => {
  let service: ContratistaGiroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratistaGiroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

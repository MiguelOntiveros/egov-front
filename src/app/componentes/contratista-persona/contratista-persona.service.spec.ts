import { TestBed } from '@angular/core/testing';

import { ContratistaPersonaService } from './contratista-persona.service';

describe('ContratistaPersonaService', () => {
  let service: ContratistaPersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratistaPersonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

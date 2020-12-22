import { TestBed } from '@angular/core/testing';

import { ContratistaReferenciaService } from './contratista-referencia.service';

describe('ContratistaReferenciaService', () => {
  let service: ContratistaReferenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratistaReferenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

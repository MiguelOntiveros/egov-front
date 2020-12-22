import { TestBed } from '@angular/core/testing';

import { ContratoReferenciaService } from './contrato-referencia.service';

describe('ContratoReferenciaService', () => {
  let service: ContratoReferenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratoReferenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

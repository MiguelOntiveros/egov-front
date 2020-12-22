import { TestBed } from '@angular/core/testing';

import { ContratoSeguimientoService } from './contrato-seguimiento.service';

describe('ContratoSeguimientoService', () => {
  let service: ContratoSeguimientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratoSeguimientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

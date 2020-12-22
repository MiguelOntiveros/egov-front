import { TestBed } from '@angular/core/testing';

import { ContratoSeguimientoBitacoraService } from './contrato-seguimiento-bitacora.service';

describe('ContratoSeguimientoBitacoraService', () => {
  let service: ContratoSeguimientoBitacoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratoSeguimientoBitacoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

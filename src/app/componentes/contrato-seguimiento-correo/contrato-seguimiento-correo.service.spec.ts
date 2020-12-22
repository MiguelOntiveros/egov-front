import { TestBed } from '@angular/core/testing';

import { ContratoSeguimientoCorreoService } from './contrato-seguimiento-correo.service';

describe('ContratoSeguimientoCorreoService', () => {
  let service: ContratoSeguimientoCorreoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratoSeguimientoCorreoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

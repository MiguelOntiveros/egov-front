import { TestBed } from '@angular/core/testing';

import { ContratoColaboradorService } from './contrato-colaborador.service';

describe('ContratoColaboradorService', () => {
  let service: ContratoColaboradorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratoColaboradorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

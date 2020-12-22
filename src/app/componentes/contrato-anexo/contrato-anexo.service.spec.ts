import { TestBed } from '@angular/core/testing';

import { ContratoAnexoService } from './contrato-anexo.service';

describe('ContratoAnexoService', () => {
  let service: ContratoAnexoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratoAnexoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

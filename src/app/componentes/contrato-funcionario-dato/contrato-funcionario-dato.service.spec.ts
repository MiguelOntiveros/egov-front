import { TestBed } from '@angular/core/testing';

import { ContratoFuncionarioDatoService } from './contrato-funcionario-dato.service';

describe('ContratoFuncionarioDatoService', () => {
  let service: ContratoFuncionarioDatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratoFuncionarioDatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

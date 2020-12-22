import { TestBed } from '@angular/core/testing';

import { ContratoFuncionarioService } from './contrato-funcionario.service';

describe('ContratoFuncionarioService', () => {
  let service: ContratoFuncionarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratoFuncionarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { UsuarioDepartamentoService } from './usuario-departamento.service';

describe('UsuarioDepartamentoService', () => {
  let service: UsuarioDepartamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioDepartamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

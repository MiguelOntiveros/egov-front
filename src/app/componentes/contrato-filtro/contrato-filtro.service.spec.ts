import { TestBed } from '@angular/core/testing';

import { ContratoFiltroService } from './contrato-filtro.service';

describe('ContratoFiltroService', () => {
  let service: ContratoFiltroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratoFiltroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ContratoTipoService } from './contrato-tipo.service';

describe('ContratoTipoService', () => {
  let service: ContratoTipoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratoTipoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

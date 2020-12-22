import { TestBed } from '@angular/core/testing';

import { ContratoRestauradoService } from './contrato-restaurado.service';

describe('ContratoRestauradoService', () => {
  let service: ContratoRestauradoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratoRestauradoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

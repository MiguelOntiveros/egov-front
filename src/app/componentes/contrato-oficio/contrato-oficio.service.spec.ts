import { TestBed } from '@angular/core/testing';

import { ContratoOficioService } from './contrato-oficio.service';

describe('ContratoOficioService', () => {
  let service: ContratoOficioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratoOficioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

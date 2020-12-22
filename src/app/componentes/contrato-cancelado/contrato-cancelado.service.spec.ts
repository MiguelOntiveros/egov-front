import { TestBed } from '@angular/core/testing';

import { ContratoCanceladoService } from './contrato-cancelado.service';

describe('ContratoCanceladoService', () => {
  let service: ContratoCanceladoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratoCanceladoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

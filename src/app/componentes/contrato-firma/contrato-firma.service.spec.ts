import { TestBed } from '@angular/core/testing';

import { ContratoFirmaService } from './contrato-firma.service';

describe('ContratoFirmaService', () => {
  let service: ContratoFirmaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratoFirmaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

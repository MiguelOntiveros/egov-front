import { TestBed } from '@angular/core/testing';

import { ContratoOficialService } from './contrato-oficial.service';

describe('ContratoOficialService', () => {
  let service: ContratoOficialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratoOficialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

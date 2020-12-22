import { TestBed } from '@angular/core/testing';

import { ContratistaSuspendidoService } from './contratista-suspendido.service';

describe('ContratistaSuspendidoService', () => {
  let service: ContratistaSuspendidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratistaSuspendidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

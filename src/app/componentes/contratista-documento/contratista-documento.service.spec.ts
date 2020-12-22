import { TestBed } from '@angular/core/testing';

import { ContratistaDocumentoService } from './contratista-documento.service';

describe('ContratistaDocumentoService', () => {
  let service: ContratistaDocumentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratistaDocumentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

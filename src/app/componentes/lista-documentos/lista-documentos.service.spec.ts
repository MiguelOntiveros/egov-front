import { TestBed } from '@angular/core/testing';

import { ListaDocumentosService } from './lista-documentos.service';

describe('ListaDocumentosService', () => {
  let service: ListaDocumentosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaDocumentosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PruebaImagenesService } from './prueba-imagenes.service';

describe('PruebaImagenesService', () => {
  let service: PruebaImagenesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PruebaImagenesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

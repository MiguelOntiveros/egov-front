import { TestBed } from '@angular/core/testing';

import { RequeridoService } from './requerido.service';

describe('RequeridoService', () => {
  let service: RequeridoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequeridoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

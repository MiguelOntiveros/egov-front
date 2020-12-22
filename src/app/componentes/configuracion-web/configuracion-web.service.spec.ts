import { TestBed } from '@angular/core/testing';

import { ConfiguracionWebService } from './configuracion-web.service';

describe('ConfiguracionWebService', () => {
  let service: ConfiguracionWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfiguracionWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

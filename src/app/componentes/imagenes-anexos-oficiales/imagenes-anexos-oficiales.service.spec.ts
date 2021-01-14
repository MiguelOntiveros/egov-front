import { TestBed } from '@angular/core/testing';

import { ImagenesAnexosOficialesService } from './imagenes-anexos-oficiales.service';

describe('ImagenesAnexosOficialesService', () => {
  let service: ImagenesAnexosOficialesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagenesAnexosOficialesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

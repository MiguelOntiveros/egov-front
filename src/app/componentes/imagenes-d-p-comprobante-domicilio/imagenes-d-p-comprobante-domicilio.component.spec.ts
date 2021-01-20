import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesDPComprobanteDomicilioComponent } from './imagenes-d-p-comprobante-domicilio.component';

describe('ImagenesDPComprobanteDomicilioComponent', () => {
  let component: ImagenesDPComprobanteDomicilioComponent;
  let fixture: ComponentFixture<ImagenesDPComprobanteDomicilioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenesDPComprobanteDomicilioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenesDPComprobanteDomicilioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

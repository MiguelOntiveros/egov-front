import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesDPUbicacionDomicilioComponent } from './imagenes-d-p-ubicacion-domicilio.component';

describe('ImagenesDPUbicacionDomicilioComponent', () => {
  let component: ImagenesDPUbicacionDomicilioComponent;
  let fixture: ComponentFixture<ImagenesDPUbicacionDomicilioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenesDPUbicacionDomicilioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenesDPUbicacionDomicilioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

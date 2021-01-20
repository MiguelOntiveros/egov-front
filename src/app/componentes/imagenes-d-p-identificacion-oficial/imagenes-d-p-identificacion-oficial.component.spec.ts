import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesDPIdentificacionOficialComponent } from './imagenes-d-p-identificacion-oficial.component';

describe('ImagenesDPIdentificacionOficialComponent', () => {
  let component: ImagenesDPIdentificacionOficialComponent;
  let fixture: ComponentFixture<ImagenesDPIdentificacionOficialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenesDPIdentificacionOficialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenesDPIdentificacionOficialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

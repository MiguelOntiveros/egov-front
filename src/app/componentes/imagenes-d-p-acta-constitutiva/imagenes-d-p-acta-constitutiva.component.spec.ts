import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesDPActaConstitutivaComponent } from './imagenes-d-p-acta-constitutiva.component';

describe('ImagenesDPActaConstitutivaComponent', () => {
  let component: ImagenesDPActaConstitutivaComponent;
  let fixture: ComponentFixture<ImagenesDPActaConstitutivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenesDPActaConstitutivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenesDPActaConstitutivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesCASeguimiento1Component } from './imagenes-c-a-seguimiento1.component';

describe('ImagenesCASeguimiento1Component', () => {
  let component: ImagenesCASeguimiento1Component;
  let fixture: ComponentFixture<ImagenesCASeguimiento1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenesCASeguimiento1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenesCASeguimiento1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesDPPoderLegalComponent } from './imagenes-d-p-poder-legal.component';

describe('ImagenesDPPoderLegalComponent', () => {
  let component: ImagenesDPPoderLegalComponent;
  let fixture: ComponentFixture<ImagenesDPPoderLegalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenesDPPoderLegalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenesDPPoderLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

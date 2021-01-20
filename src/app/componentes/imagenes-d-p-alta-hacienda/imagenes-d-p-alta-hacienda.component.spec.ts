import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesDPAltaHaciendaComponent } from './imagenes-d-p-alta-hacienda.component';

describe('ImagenesDPAltaHaciendaComponent', () => {
  let component: ImagenesDPAltaHaciendaComponent;
  let fixture: ComponentFixture<ImagenesDPAltaHaciendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenesDPAltaHaciendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenesDPAltaHaciendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

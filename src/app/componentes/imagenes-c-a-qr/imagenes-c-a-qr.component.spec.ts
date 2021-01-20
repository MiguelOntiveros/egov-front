import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesCAQrComponent } from './imagenes-c-a-qr.component';

describe('ImagenesCAQrComponent', () => {
  let component: ImagenesCAQrComponent;
  let fixture: ComponentFixture<ImagenesCAQrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenesCAQrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenesCAQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

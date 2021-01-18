import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesContratosYAnexosComponent } from './imagenes-contratos-y-anexos.component';

describe('ImagenesContratosYAnexosComponent', () => {
  let component: ImagenesContratosYAnexosComponent;
  let fixture: ComponentFixture<ImagenesContratosYAnexosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenesContratosYAnexosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenesContratosYAnexosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

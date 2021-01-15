import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesAOOficioDeOrigenDeLosRecursosComponent } from './imagenes-a-o-oficio-de-origen-de-los-recursos.component';

describe('ImagenesAOOficioDeOrigenDeLosRecursosComponent', () => {
  let component: ImagenesAOOficioDeOrigenDeLosRecursosComponent;
  let fixture: ComponentFixture<ImagenesAOOficioDeOrigenDeLosRecursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenesAOOficioDeOrigenDeLosRecursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenesAOOficioDeOrigenDeLosRecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

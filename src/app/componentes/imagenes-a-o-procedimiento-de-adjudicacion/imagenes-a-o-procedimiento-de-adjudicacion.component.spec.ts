import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesAOProcedimientoDeAdjudicacionComponent } from './imagenes-a-o-procedimiento-de-adjudicacion.component';

describe('ImagenesAOProcedimientoDeAdjudicacionComponent', () => {
  let component: ImagenesAOProcedimientoDeAdjudicacionComponent;
  let fixture: ComponentFixture<ImagenesAOProcedimientoDeAdjudicacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenesAOProcedimientoDeAdjudicacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenesAOProcedimientoDeAdjudicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

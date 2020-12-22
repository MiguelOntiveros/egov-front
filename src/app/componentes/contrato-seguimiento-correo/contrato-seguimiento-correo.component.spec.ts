import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoSeguimientoCorreoComponent } from './contrato-seguimiento-correo.component';

describe('ContratoSeguimientoCorreoComponent', () => {
  let component: ContratoSeguimientoCorreoComponent;
  let fixture: ComponentFixture<ContratoSeguimientoCorreoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratoSeguimientoCorreoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoSeguimientoCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

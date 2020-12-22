import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoSeguimientoBitacoraComponent } from './contrato-seguimiento-bitacora.component';

describe('ContratoSeguimientoBitacoraComponent', () => {
  let component: ContratoSeguimientoBitacoraComponent;
  let fixture: ComponentFixture<ContratoSeguimientoBitacoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratoSeguimientoBitacoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoSeguimientoBitacoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

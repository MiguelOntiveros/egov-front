import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoSeguimientoComponent } from './contrato-seguimiento.component';

describe('ContratoSeguimientoComponent', () => {
  let component: ContratoSeguimientoComponent;
  let fixture: ComponentFixture<ContratoSeguimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratoSeguimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoSeguimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoReferenciaComponent } from './contrato-referencia.component';

describe('ContratoReferenciaComponent', () => {
  let component: ContratoReferenciaComponent;
  let fixture: ComponentFixture<ContratoReferenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratoReferenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoReferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoFuncionarioDatoComponent } from './contrato-funcionario-dato.component';

describe('ContratoFuncionarioDatoComponent', () => {
  let component: ContratoFuncionarioDatoComponent;
  let fixture: ComponentFixture<ContratoFuncionarioDatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratoFuncionarioDatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoFuncionarioDatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

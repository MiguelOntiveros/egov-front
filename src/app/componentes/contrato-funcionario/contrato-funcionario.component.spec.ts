import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoFuncionarioComponent } from './contrato-funcionario.component';

describe('ContratoFuncionarioComponent', () => {
  let component: ContratoFuncionarioComponent;
  let fixture: ComponentFixture<ContratoFuncionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratoFuncionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

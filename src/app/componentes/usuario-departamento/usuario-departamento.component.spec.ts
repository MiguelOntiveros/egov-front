import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioDepartamentoComponent } from './usuario-departamento.component';

describe('UsuarioDepartamentoComponent', () => {
  let component: UsuarioDepartamentoComponent;
  let fixture: ComponentFixture<UsuarioDepartamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioDepartamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoFiltroComponent } from './contrato-filtro.component';

describe('ContratoFiltroComponent', () => {
  let component: ContratoFiltroComponent;
  let fixture: ComponentFixture<ContratoFiltroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratoFiltroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoColaboradorComponent } from './contrato-colaborador.component';

describe('ContratoColaboradorComponent', () => {
  let component: ContratoColaboradorComponent;
  let fixture: ComponentFixture<ContratoColaboradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratoColaboradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoOficioComponent } from './contrato-oficio.component';

describe('ContratoOficioComponent', () => {
  let component: ContratoOficioComponent;
  let fixture: ComponentFixture<ContratoOficioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratoOficioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoOficioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

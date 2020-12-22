import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoRestauradoComponent } from './contrato-restaurado.component';

describe('ContratoRestauradoComponent', () => {
  let component: ContratoRestauradoComponent;
  let fixture: ComponentFixture<ContratoRestauradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratoRestauradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoRestauradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

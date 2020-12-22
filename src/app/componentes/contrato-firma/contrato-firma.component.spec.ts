import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoFirmaComponent } from './contrato-firma.component';

describe('ContratoFirmaComponent', () => {
  let component: ContratoFirmaComponent;
  let fixture: ComponentFixture<ContratoFirmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratoFirmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoFirmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

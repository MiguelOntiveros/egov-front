import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoOficialComponent } from './contrato-oficial.component';

describe('ContratoOficialComponent', () => {
  let component: ContratoOficialComponent;
  let fixture: ComponentFixture<ContratoOficialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratoOficialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoOficialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

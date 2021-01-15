import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedimientoDeAdjudicacionComponent } from './procedimiento-de-adjudicacion.component';

describe('ProcedimientoDeAdjudicacionComponent', () => {
  let component: ProcedimientoDeAdjudicacionComponent;
  let fixture: ComponentFixture<ProcedimientoDeAdjudicacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedimientoDeAdjudicacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedimientoDeAdjudicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

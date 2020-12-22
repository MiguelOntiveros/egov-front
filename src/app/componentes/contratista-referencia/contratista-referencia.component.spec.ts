import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratistaReferenciaComponent } from './contratista-referencia.component';

describe('ContratistaReferenciaComponent', () => {
  let component: ContratistaReferenciaComponent;
  let fixture: ComponentFixture<ContratistaReferenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratistaReferenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratistaReferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

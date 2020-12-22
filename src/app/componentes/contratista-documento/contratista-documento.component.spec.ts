import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratistaDocumentoComponent } from './contratista-documento.component';

describe('ContratistaDocumentoComponent', () => {
  let component: ContratistaDocumentoComponent;
  let fixture: ComponentFixture<ContratistaDocumentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratistaDocumentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratistaDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

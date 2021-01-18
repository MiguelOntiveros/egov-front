import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosPadronComponent } from './documentos-padron.component';

describe('DocumentosPadronComponent', () => {
  let component: DocumentosPadronComponent;
  let fixture: ComponentFixture<DocumentosPadronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentosPadronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentosPadronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

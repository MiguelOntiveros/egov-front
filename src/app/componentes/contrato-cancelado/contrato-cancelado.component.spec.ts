import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoCanceladoComponent } from './contrato-cancelado.component';

describe('ContratoCanceladoComponent', () => {
  let component: ContratoCanceladoComponent;
  let fixture: ComponentFixture<ContratoCanceladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratoCanceladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoCanceladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

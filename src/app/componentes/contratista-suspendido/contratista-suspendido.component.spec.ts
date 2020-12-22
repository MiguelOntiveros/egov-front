import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratistaSuspendidoComponent } from './contratista-suspendido.component';

describe('ContratistaSuspendidoComponent', () => {
  let component: ContratistaSuspendidoComponent;
  let fixture: ComponentFixture<ContratistaSuspendidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratistaSuspendidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratistaSuspendidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

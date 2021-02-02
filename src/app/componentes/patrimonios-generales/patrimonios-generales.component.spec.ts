import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrimoniosGeneralesComponent } from './patrimonios-generales.component';

describe('PatrimoniosGeneralesComponent', () => {
  let component: PatrimoniosGeneralesComponent;
  let fixture: ComponentFixture<PatrimoniosGeneralesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatrimoniosGeneralesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatrimoniosGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

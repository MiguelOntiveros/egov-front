import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrasGeneralesComponent } from './obras-generales.component';

describe('ObrasGeneralesComponent', () => {
  let component: ObrasGeneralesComponent;
  let fixture: ComponentFixture<ObrasGeneralesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObrasGeneralesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObrasGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

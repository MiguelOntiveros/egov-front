import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratistaPersonaComponent } from './contratista-persona.component';

describe('ContratistaPersonaComponent', () => {
  let component: ContratistaPersonaComponent;
  let fixture: ComponentFixture<ContratistaPersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratistaPersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratistaPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

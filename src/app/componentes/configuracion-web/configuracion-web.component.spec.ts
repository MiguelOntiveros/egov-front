import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionWebComponent } from './configuracion-web.component';

describe('ConfiguracionWebComponent', () => {
  let component: ConfiguracionWebComponent;
  let fixture: ComponentFixture<ConfiguracionWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracionWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTituloComponent } from './header-titulo.component';

describe('HeaderTituloComponent', () => {
  let component: HeaderTituloComponent;
  let fixture: ComponentFixture<HeaderTituloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderTituloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

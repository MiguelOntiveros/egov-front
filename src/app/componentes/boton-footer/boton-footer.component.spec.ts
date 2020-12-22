import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonFooterComponent } from './boton-footer.component';

describe('BotonFooterComponent', () => {
  let component: BotonFooterComponent;
  let fixture: ComponentFixture<BotonFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

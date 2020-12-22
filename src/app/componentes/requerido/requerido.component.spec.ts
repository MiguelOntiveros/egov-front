import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequeridoComponent } from './requerido.component';

describe('RequeridoComponent', () => {
  let component: RequeridoComponent;
  let fixture: ComponentFixture<RequeridoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequeridoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequeridoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

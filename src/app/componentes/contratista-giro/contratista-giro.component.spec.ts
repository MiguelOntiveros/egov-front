import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratistaGiroComponent } from './contratista-giro.component';

describe('ContratistaGiroComponent', () => {
  let component: ContratistaGiroComponent;
  let fixture: ComponentFixture<ContratistaGiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratistaGiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratistaGiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

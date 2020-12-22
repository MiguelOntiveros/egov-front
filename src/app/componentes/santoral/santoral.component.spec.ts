import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SantoralComponent } from './santoral.component';

describe('SantoralComponent', () => {
  let component: SantoralComponent;
  let fixture: ComponentFixture<SantoralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SantoralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SantoralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

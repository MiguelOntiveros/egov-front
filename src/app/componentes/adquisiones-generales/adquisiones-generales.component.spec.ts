import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdquisionesGeneralesComponent } from './adquisiones-generales.component';

describe('AdquisionesGeneralesComponent', () => {
  let component: AdquisionesGeneralesComponent;
  let fixture: ComponentFixture<AdquisionesGeneralesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdquisionesGeneralesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdquisionesGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

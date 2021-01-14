import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesAnexosOficialesComponent } from './imagenes-anexos-oficiales.component';

describe('ImagenesAnexosOficialesComponent', () => {
  let component: ImagenesAnexosOficialesComponent;
  let fixture: ComponentFixture<ImagenesAnexosOficialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenesAnexosOficialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenesAnexosOficialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

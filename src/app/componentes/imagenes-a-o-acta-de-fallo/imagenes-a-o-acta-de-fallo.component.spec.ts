import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesAOActaDeFalloComponent } from './imagenes-a-o-acta-de-fallo.component';

describe('ImagenesAOActaDeFalloComponent', () => {
  let component: ImagenesAOActaDeFalloComponent;
  let fixture: ComponentFixture<ImagenesAOActaDeFalloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenesAOActaDeFalloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenesAOActaDeFalloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

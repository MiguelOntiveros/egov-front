import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesAOBasesDeLicitacionComponent } from './imagenes-a-o-bases-de-licitacion.component';

describe('ImagenesAOBasesDeLicitacionComponent', () => {
  let component: ImagenesAOBasesDeLicitacionComponent;
  let fixture: ComponentFixture<ImagenesAOBasesDeLicitacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenesAOBasesDeLicitacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenesAOBasesDeLicitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

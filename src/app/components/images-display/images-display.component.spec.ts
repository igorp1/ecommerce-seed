import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesDisplayComponent } from './images-display.component';

describe('ImagesDisplayComponent', () => {
  let component: ImagesDisplayComponent;
  let fixture: ComponentFixture<ImagesDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

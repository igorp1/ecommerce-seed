import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSectionDisplayComponent } from './text-section-display.component';

describe('TextSectionDisplayComponent', () => {
  let component: TextSectionDisplayComponent;
  let fixture: ComponentFixture<TextSectionDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextSectionDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextSectionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

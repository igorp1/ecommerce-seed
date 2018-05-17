import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsPickerComponent } from './options-picker.component';

describe('OptionsPickerComponent', () => {
  let component: OptionsPickerComponent;
  let fixture: ComponentFixture<OptionsPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionsPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripperStepOneComponent } from './stripper-step-one.component';

describe('StripperStepOneComponent', () => {
  let component: StripperStepOneComponent;
  let fixture: ComponentFixture<StripperStepOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StripperStepOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StripperStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

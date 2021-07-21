import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripperStepFiveComponent } from './stripper-step-five.component';

describe('StripperStepFiveComponent', () => {
  let component: StripperStepFiveComponent;
  let fixture: ComponentFixture<StripperStepFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StripperStepFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StripperStepFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

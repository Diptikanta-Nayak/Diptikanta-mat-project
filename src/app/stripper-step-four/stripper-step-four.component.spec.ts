import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripperStepFourComponent } from './stripper-step-four.component';

describe('StripperStepFourComponent', () => {
  let component: StripperStepFourComponent;
  let fixture: ComponentFixture<StripperStepFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StripperStepFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StripperStepFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

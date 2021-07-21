import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripperStepSixComponent } from './stripper-step-six.component';

describe('StripperStepSixComponent', () => {
  let component: StripperStepSixComponent;
  let fixture: ComponentFixture<StripperStepSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StripperStepSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StripperStepSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

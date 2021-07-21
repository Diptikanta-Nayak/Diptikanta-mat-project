import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripperStepThreeComponent } from './stripper-step-three.component';

describe('StripperStepThreeComponent', () => {
  let component: StripperStepThreeComponent;
  let fixture: ComponentFixture<StripperStepThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StripperStepThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StripperStepThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

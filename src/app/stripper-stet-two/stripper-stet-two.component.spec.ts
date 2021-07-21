import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripperStetTwoComponent } from './stripper-stet-two.component';

describe('StripperStetTwoComponent', () => {
  let component: StripperStetTwoComponent;
  let fixture: ComponentFixture<StripperStetTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StripperStetTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StripperStetTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

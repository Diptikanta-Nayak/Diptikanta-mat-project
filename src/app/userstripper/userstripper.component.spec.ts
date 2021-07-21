import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserstripperComponent } from './userstripper.component';

describe('UserstripperComponent', () => {
  let component: UserstripperComponent;
  let fixture: ComponentFixture<UserstripperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserstripperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserstripperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

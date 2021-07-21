import { TestBed } from '@angular/core/testing';

import { StripperserviceService } from './stripperservice.service';

describe('StripperserviceService', () => {
  let service: StripperserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StripperserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

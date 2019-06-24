import { TestBed } from '@angular/core/testing';

import { PlacerequestService } from './placerequest.service';

describe('PlacerequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlacerequestService = TestBed.get(PlacerequestService);
    expect(service).toBeTruthy();
  });
});

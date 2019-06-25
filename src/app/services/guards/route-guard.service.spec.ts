import { TestBed } from '@angular/core/testing';

import { UserLoggedInGuardService } from './route-guard.service';

describe('RouteGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserLoggedInGuardService = TestBed.get(UserLoggedInGuardService);
    expect(service).toBeTruthy();
  });
});

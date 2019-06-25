import { TestBed } from '@angular/core/testing';

import { UserIsAnnoymousService } from './user-is-annoymous.service';

describe('UserIsAnnoymousService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserIsAnnoymousService = TestBed.get(UserIsAnnoymousService);
    expect(service).toBeTruthy();
  });
});

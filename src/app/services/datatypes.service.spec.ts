import { TestBed } from '@angular/core/testing';

import { DatatypesService } from './datatypes.service';

describe('DatatypesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatatypesService = TestBed.get(DatatypesService);
    expect(service).toBeTruthy();
  });
});

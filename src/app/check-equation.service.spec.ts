import { TestBed } from '@angular/core/testing';

import { CheckEquationService } from './check-equation.service';

describe('CheckEquationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckEquationService = TestBed.get(CheckEquationService);
    expect(service).toBeTruthy();
  });
});

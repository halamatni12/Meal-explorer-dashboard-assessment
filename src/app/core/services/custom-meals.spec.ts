import { TestBed } from '@angular/core/testing';

import { CustomMeals } from './custom-meals-service';

describe('CustomMeals', () => {
  let service: CustomMeals;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomMeals);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

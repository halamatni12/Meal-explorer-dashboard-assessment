import { TestBed } from '@angular/core/testing';

import { MealApiTs } from './meal-api';

describe('MealApiTs', () => {
  let service: MealApiTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealApiTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

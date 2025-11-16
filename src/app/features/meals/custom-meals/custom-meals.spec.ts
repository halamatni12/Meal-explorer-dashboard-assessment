import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMeals } from './custom-meals';

describe('CustomMeals', () => {
  let component: CustomMeals;
  let fixture: ComponentFixture<CustomMeals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomMeals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomMeals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

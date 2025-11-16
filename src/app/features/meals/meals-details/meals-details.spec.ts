import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsDetails } from './meals-details';

describe('MealsDetails', () => {
  let component: MealsDetails;
  let fixture: ComponentFixture<MealsDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealsDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealsDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

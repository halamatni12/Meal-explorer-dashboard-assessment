import { Component } from '@angular/core';
import { CustomMealService } from '../../../core/services/custom-meals-service';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-add-meal',
  standalone: true,
  imports: [FormsModule, RouterModule, NgIf],
  templateUrl: './add-meal.html',
  styleUrl: './add-meal.css',
})
export class AddMeal {
  meal = {
    id: 0,
    name: '',
    category: '',
    description: '',
    price: 0,
    image: ''
  };
  constructor(private customService: CustomMealService, private router: Router) { }
  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      this.meal.image = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
  save() {
    this.customService.addMeal(this.meal);
    this.router.navigate(['custommeals']);
  }
}

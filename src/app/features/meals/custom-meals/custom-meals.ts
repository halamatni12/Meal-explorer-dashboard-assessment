import { Component, OnInit } from '@angular/core';
import { CustomMealService } from '../../../core/services/custom-meals-service';
import { RouterModule } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomMeal } from '../../../core/models/custom-meal.model';
@Component({
  selector: 'app-custom-meals',
  standalone: true,
  imports: [RouterModule, NgFor, NgIf, FormsModule],
  templateUrl: './custom-meals.html',
  styleUrl: './custom-meals.css',
})
export class CustomMeals implements OnInit {

  meals!: ()=>CustomMeal[];
  filteredMeals: any[] = [];
  searchText = '';
  selectedCategory = '';
  sortBy = '';
  categories: string[] = [];

  constructor(private CustomService: CustomMealService) { }
  ngOnInit(): void {

    this.meals = this.CustomService.getAllMeals();
    this.filteredMeals = this.meals();
    this.generateCategories();
  }
  generateCategories() {

    this.categories = [...new Set(this.meals().map((m: any) => m.category as string))];
  }
  applyFilters(){
    let list=[...this.meals()];
    if(this.searchText.trim()!=''){
      const q=this.searchText.toLowerCase();
      list=list.filter((m:any)=>
      m.name.toLowerCase().includes(q)||
       m.description.toLowerCase().includes(q)||
        m.category.toLowerCase().includes(q)
      );
    }
if(this.selectedCategory!=''){
   list=list.filter((m:any)=>m.category===this.selectedCategory);
}

    if (this.sortBy === 'name') {
      list.sort((a: any, b: any) => a.name.localeCompare(b.name));
    }
    else if (this.sortBy === 'price') {
      list.sort((a: any, b: any) => a.price - b.price);
    }
    else if (this.sortBy === 'category') {
      list.sort((a: any, b: any) => a.category.localeCompare(b.category));
    }

    this.filteredMeals = list;
  }




  
  deleteMeal(id: number) {
    this.CustomService.deleteMeal(id);
    this.applyFilters();
    this.generateCategories();
  }


}

import { Injectable, signal } from '@angular/core';
import { CustomMeal } from '../models/custom-meal.model';
@Injectable({
  providedIn: 'root',
})
export class CustomMealService {
  meals=signal<CustomMeal[]>([]);
  constructor(){
    this.loadFromStorage();
  }
  private saveToStorage(){
    localStorage.setItem('customMeals',JSON.stringify(this.meals()));
  }
  private loadFromStorage(){
    const saved =localStorage.getItem('customMeals');
    if(saved){this.meals.set(JSON.parse(saved));

    }
  }
  addMeal(meal:CustomMeal){
    const current=this.meals();
    meal.id=Date.now();
    this.meals.set([...current,meal]);
    this.saveToStorage();
  }
updateMeal(updatedMeal:CustomMeal){
  const newList=this.meals().map(m=>
    m.id ===updatedMeal.id ? updatedMeal:m
  );
  this.meals.set(newList);
     this.saveToStorage();
}
deleteMeal(id:number){
  this.meals.set(this.meals().filter(m => m.id != id));
     this.saveToStorage();
}
getAllMeals(){
  return this.meals.asReadonly();
}
getMealById(id:number):CustomMeal|undefined{
  return this.meals().find(m=>m.id===id);
}
}

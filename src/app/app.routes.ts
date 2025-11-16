import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { MealsList } from './features/meals/meals-list/meals-list';
import { CustomMeals } from './features/meals/custom-meals/custom-meals';
import { MealsDetails } from './features/meals/meals-details/meals-details';
import { AddMeal } from './features/meals/add-meal/add-meal';
import { EditMeal } from './features/meals/edit-meal/edit-meal';
export const routes: Routes = [
    {path:'',component:Dashboard},
    {path:'dashboard',component:Dashboard},
     {path:'meals/add',component:AddMeal},
     {path:'custommeals',component:CustomMeals},
     {path:'meals/edit/:id',component:EditMeal},
     {path:'meals/:name',component:MealsDetails},
    {path:'meals',component:MealsList}
       
      
        
];

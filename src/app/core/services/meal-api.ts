import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin,map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MealApiTs {
  private base='https://www.themealdb.com/api/json/v1/1';

  meals=signal<any[]>([]);
  loading=signal<boolean>(false);
  constructor(private http:HttpClient){}
loadAllMeals(){
  this.loading.set(true);
  const letters='abcdefghijklmnopqrstuvwxyz'.split('');

  const requests=letters.map(l=>
    this.http.get<any>(`${this.base}/search.php?f=${l}`)
  );
  const sub= forkJoin(requests).pipe(
    map(responses=>{
      const all:any[]=[];
      responses.forEach(r=>{
        if(r.meals){
          const validMeals=r.meals.filter( (m:any) =>!!m.idMeal && !! m.strMealThumb);
          all.push(...validMeals);
     } });
      return all
    })
  ).subscribe(allMeals=>{
    console.log("DATA LOADED:", allMeals.length);
console.log(allMeals)
    this.meals.set(allMeals);
    this.loading.set(false);
  });
  return sub;
}
getMealByName(name:string){
  return this.http.get<any>(`${this.base}/search.php?s=${name}`);
}
}
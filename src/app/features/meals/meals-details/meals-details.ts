import { Component, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealApiTs } from '../../../core/services/meal-api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-meals-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meals-details.html',
  styleUrl: './meals-details.css',
})
export class MealsDetails implements OnInit {
  meal: any = null;
  constructor(private route: ActivatedRoute, private api: MealApiTs, private router: Router) { }
  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
        console.log("GOT name:", name);
    this.api.getMealByName(name!).subscribe(res => {
      if(res.meals&&res.meals.length>0){
      this.meal = res.meals[0];
      }else{
        alert("not fount");
      }
    });
  }

  goBack() {
    this.router.navigate(['/meals']);
  }
}



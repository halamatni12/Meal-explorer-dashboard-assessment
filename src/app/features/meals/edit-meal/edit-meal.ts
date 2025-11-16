import { Component, OnInit } from '@angular/core';
import { CustomMealService } from '../../../core/services/custom-meals-service';
import { RouterModule,Router,ActivatedRoute } from '@angular/router';
import { NgIf} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomMeal } from '../../../core/models/custom-meal.model';
@Component({
  selector: 'app-edit-meal',
  standalone:true,
  imports: [FormsModule,RouterModule,NgIf],
  templateUrl: './edit-meal.html',
  styleUrl: './edit-meal.css',
})
export class EditMeal implements OnInit {
meal!:CustomMeal;
constructor(private route:ActivatedRoute,
  private router:Router,
  private customService:CustomMealService
){}
ngOnInit(): void {
  const id=Number(this.route.snapshot.paramMap.get('id'));
  const found=this.customService.getMealById(id);
  if(!found){
    this.router.navigate(['/custommeals']);
    return;
  }
  this.meal={...found};
}
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
    this.customService.updateMeal(this.meal);
    this.router.navigate(['custommeals']);
  }
}

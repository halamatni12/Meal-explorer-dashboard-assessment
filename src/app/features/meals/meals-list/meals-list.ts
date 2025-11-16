import { Component, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MealApiTs } from '../../../core/services/meal-api';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-meals-list',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './meals-list.html',
  styleUrl: './meals-list.css',
})
export class MealsList implements OnInit {
  searchTerm = signal('');
  selectedcategory = signal('all');
  page = signal(1);
  pagesize = 10;
  categories = signal<string[]>([]);
  constructor(public api: MealApiTs, private router: Router) { }

  ngOnInit(): void {

    this.api.loadAllMeals().add(() => {
      const cats = [...new Set(this.api.meals().map(m => m.strCategory))];
      this.categories.set(['all', ...cats]);
    });
    document.addEventListener('click', (event: any) => {
      const isInside = event.target.closest('.filter-box');
      if (!isInside) {
        this.dropdownOpen = false;
      }
    });

  }
  dropdownOpen = false;
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  selectCategory(cat: string) {
    this.selectedcategory.set(cat);
    this.page.set(1);
    this.dropdownOpen = false;
  }

  filteredMeals = computed(() => {
    const term = this.searchTerm().toLowerCase();
    const category = this.selectedcategory();
    let list = this.api.meals();
    if (term) {
      list = list.filter(m => m.strMeal.toLowerCase().includes(term));
    }
    if (category !== 'all') {
      list = list.filter(m => m.strCategory == category);
    }
    return list;

  });

  pagedMeals = computed(() => {
    const start = (this.page() - 1) * this.pagesize;
    const end = start + this.pagesize;
    return this.filteredMeals().slice(start, end);

  });
  total = computed(() => this.filteredMeals().length);
  startIndex = computed(() => (this.page() - 1) * this.pagesize + 1);
  endIndex = computed(() =>
    Math.min(this.page() * this.pagesize, this.total())
  );
  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  next() {
    if (this.endIndex() < this.total()) this.page.update(v => v + 1);
    this.scrollTop();
  }
  prev() {
    if (this.page() > 1) this.page.update(v => v - 1);
    this.scrollTop();
  }
  updateSearch() {
    this.page.set(1);
  }
  updateFilter() {
    this.page.set(1);
  }
  onViewDetails(meal: any) {
      console.log("ID:", meal.strMeal);
    this.router.navigate(['/meals', meal.strMeal]);
  }
}

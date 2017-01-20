import { Food } from './food.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'food-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allFoods">All Foods</option>
    <option value="highCalorieFoods">High Calorie Foods</option>
    <option value="lowCalorieFoods">Low Calorie Foods</option>
  </select>
  <ul class="list-group">
   <li class="list-group-item justify-content-between" (click)="foodHasBeenClicked(currentFood)" *ngFor="let currentFood of childFoodList | calorieContent:filterByCalorieContent">{{currentFood.name}} {{currentFood.details}}  <span class="badge badge-default badge-pill">{{currentFood.calories}}</span>
   </li>
  </ul>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();

  filterByCalorieContent: string = "allFoods";

  onChange(optionFromMenu) {
    this.filterByCalorieContent = optionFromMenu;
  }

  foodHasBeenClicked(clickedFood: Food) {
    this.clickSender.emit(clickedFood)
  }
}

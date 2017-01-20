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
  <div class="collection with-header">
    <h4 *ngIf="childFoodList.length" class="collection-header">Click on a Food to Edit</h4>
    <a href="#!" class="collection-item" (click)="foodHasBeenClicked(currentFood)" *ngFor="let currentFood of childFoodList | calorieContent:filterByCalorieContent">{{currentFood.name}} {{currentFood.details}}  <span class="new badge" data-badge-caption="Calories">{{currentFood.calories}}</span>
    </a>
  </div>
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

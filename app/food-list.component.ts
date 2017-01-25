import { Food } from './food.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'food-list',
  template: `
  <div *ngIf="childFoodList.length" class="collection with-header">
    <div class="collection-header">
      <form action="#" (change)="onChange($event.target.value)">
          <input name="calorie-content" value="allFoods" type="radio" id="all"/>
          <label for="all">All Foods</label>
          <input name="calorie-content" value="highCalorieFoods" type="radio" id="high"/>
          <label for="high">High Calorie Foods</label>
          <input name="calorie-content" value="lowCalorieFoods" type="radio" id="low"/>
          <label for="low">Low Calorie Foods</label>
      </form>
    </div>
    <a href="#!" [class]="beingEdited(currentFood)" (click)="foodHasBeenClicked(currentFood)" *ngFor="let currentFood of childFoodList | calorieContent:filterByCalorieContent">
      <div class="col s5">{{currentFood.name}}</div>
      <div class="col s5">{{currentFood.details}}</div>
      <span class="new badge" data-badge-caption="Calories">{{currentFood.calories}}</span>
    </a>
    <div class="collection-item row">
      <p>Total Calories Today:<span class="new badge" data-badge-caption="Calories">{{tallyCalories()}}</span></p>
    </div>
  </div>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();

  totalCalories: number = 0;
  filterByCalorieContent: string = "allFoods";

  tallyCalories() {
    this.totalCalories = 0;
    this.childFoodList.forEach((foodItem) => {
      this.totalCalories = this.totalCalories + foodItem.calories;
    });
    return this.totalCalories;
  }

  onChange(optionFromMenu) {
    this.filterByCalorieContent = optionFromMenu;
  }

  foodHasBeenClicked(clickedFood: Food) {
    this.clickSender.emit(clickedFood);
    this.childFoodList.forEach(function(foodItem) {
      foodItem.isBeingEdited = false;
    });
    clickedFood.isBeingEdited = true;
  }

  beingEdited(foodItem: Food) {
    if (foodItem.isBeingEdited === false) {
      return "collection-item row";
    } else {
      return "collection-item row active"
    }
  }
}

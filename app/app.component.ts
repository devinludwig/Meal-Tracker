import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <nav>
    <div class="nav-wrapper z-depth-5">
      <p class="brand-logo left">Calorie Conductor</p>
      <h5 class="right">Your Diet Assistant</h5>
    </div>
    </nav>
    <food-list [childFoodList]="masterFoodList" (clickSender)="editFood($event)"></food-list>
    <edit-food [childSelectedFood]="selectedFood" (doneButtonClickedSender)="finishedEditing()"></edit-food>
    <new-food [childSelectedFood]="selectedFood" (newFoodSender)="addFood($event)"></new-food>
  </div>
  `
})

export class AppComponent {
  currentTime = new Date;
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedFood = null;

  masterFoodList: Food[] = [

  ];

  addFood(newFood: Food) {
    this.masterFoodList.push(newFood);
  }

  editFood(clickedFood) {
    this.selectedFood = clickedFood;
  }

  finishedEditing() {
    this.selectedFood = null;
  }
}

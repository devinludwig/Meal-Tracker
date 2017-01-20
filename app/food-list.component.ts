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
   <li class="list-group-item justify-content-between" (click)="foodHasBeenClicked(currentFood)" *ngFor="let currentFood of childFoodList | completeness:filterByCompleteness">{{currentFood.name}} {{currentFood.details}}  <span class="badge badge-default badge-pill">{{currentFood.calories}}</span>
   </li>
  </ul>
  `
})

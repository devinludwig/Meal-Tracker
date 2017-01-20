import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
  <h3>New Food</h3>
  <div>
    <label>What Did You Eat?</label>
    <input #newName>
    <label>Any Details You Want to Add?</label>
    <input #newDetails>
    <label>How Many Calories Were in it?</label>
    <input type="number" #newCalories>
    <button (click)="submitForm(newName.value, newDetails.value, newCalories.value); newName.value=''; newDetails.value=''; newCalories.value='';">Add</button>
  </div>
  `
})

export class NewFoodComponent {
  @Output() newFoodSender = new EventEmitter();

  submitForm(name: string, details: string, calories: number) {
    var newFoodToAdd: Food = new Food(name, details, calories);
    this.newFoodSender.emit(newFoodToAdd);
  }
}

import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
  <div class="well">
    <div class="input-field">
      <input #newName type="text">
      <label>What Did You Eat?</label>
    </div>
    <div class="input-field">
      <input #newDetails type="text">
      <label>Any Details You Want to Add?</label>
    </div>
    <div class="input-field">
      <input type="number" #newCalories>
      <label>How Many Calories Were in it?</label>
    </div>
    <button class="btn waves-effect waves-light" type="submit" (click)="submitForm(newName.value, newDetails.value, newCalories.value); newName.value=''; newDetails.value=''; newCalories.value='';">Add</button>
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

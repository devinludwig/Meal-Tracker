import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
  <form class="well" *ngIf="!childSelectedFood" (submit)="submitForm(newName.value, newDetails.value, newCalories.value); newName.value=''; newDetails.value=''; newCalories.value=null;">
    <div class="input-field">
      <input #newName type="text" autofocus required>
      <label>What Did You Eat?</label>
    </div>
    <div class="input-field">
      <input #newDetails type="text">
      <label>Any Details You Want to Add?</label>
    </div>
    <div class="input-field">
      <input type="number" #newCalories required>
      <label>How Many Calories Were in it?</label>
    </div>
    <button class="btn waves-effect waves-light" type="submit">Add</button>
  </form>
  `
})

export class NewFoodComponent {
  @Input() childSelectedFood: Food;
  @Output() newFoodSender = new EventEmitter();

  submitForm(name: string, details: string, calories: string) {
    if (name !== '' && calories !== null) {
      var newFoodToAdd: Food = new Food(name, details, parseInt(calories));
      console.log(newFoodToAdd)
      this.newFoodSender.emit(newFoodToAdd);
    }
  }
}

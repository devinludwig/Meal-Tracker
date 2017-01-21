import { Food } from './food.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'edit-food',
  template: `
  <div class="well" *ngIf="childSelectedFood">
    <h5>Edit "{{childSelectedFood.name}}"</h5>
    <div class="input-field">
      <input type="text" [(ngModel)]="childSelectedFood.name">
      <label class="active">Name:</label>
    </div>
    <div class="input-field">
      <input type="text" [(ngModel)]="childSelectedFood.details">
      <label class="active">Details:</label>
    <div class="input-field">
      <input [(ngModel)]="childSelectedFood.calories" type="number">
      <label class="active">Calories:</label>
    </div>
    <br>
    <button class="btn waves-effect waves-light" (click)="doneButtonClicked(childSelectedFood)">Done</button>
    <button class="btn waves-effect waves-light" (click)="deleteButtonClicked(childSelectedFood)">Remove</button>
  </div>
  `
})

export class EditFoodComponent {
  @Input() childSelectedFood: Food;
  @Output() doneButtonClickedSender = new EventEmitter();
  @Output() deleteSender = new EventEmitter();

  doneButtonClicked(foodItem: Food) {
    this.doneButtonClickedSender.emit();
    foodItem.isBeingEdited = false;
  }

  deleteButtonClicked(foodItem: Food) {
    this.deleteSender.emit();
  }
}

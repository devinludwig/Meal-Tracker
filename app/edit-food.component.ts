import { Food } from './food.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'edit-food',
  template: `
  <div class="form-inline" *ngIf="childSelectedFood">
    <p>Edit Food Item Below</p>
    <div class="input-field">
      <label>Name:</label>
      <input class="form-control" [(ngModel)]="childSelectedFood.name">
    </div>
    <div class="input-field">
      <label>Details:</label>
      <input class="form-control" [(ngModel)]="childSelectedFood.details">
    <div class="input-field">
      <label>Calories:</label>
      <input class="form-control" [(ngModel)]="childSelectedFood.calories" type="number">
    </div>
    <br>
    <button class="btn btn-primary form-control" (click)="doneButtonClicked()">Done</button>
  </div>
  `
})

export class EditFoodComponent {
  @Input() childSelectedFood: Food;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}

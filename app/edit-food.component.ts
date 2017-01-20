import { Food } from './food.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'edit-food',
  template: `
  <form class="form-inline" *ngIf="childSelectedFood">
    <h3>Edit Food Item Below</h3>
    <label>Name:</label>
    <input class="form-control" [(ngModel)]="childSelectedFood.name">
    <label>Details:</label>
    <input class="form-control" [(ngModel)]="childSelectedFood.details">
    <label>Calories:</label>
    <input class="form-control" [(ngModel)]="childSelectedFood.calories" type="number">
    <br>
    <button (click)="doneButtonClicked()">Done</button>
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

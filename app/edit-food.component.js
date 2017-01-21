"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var food_model_1 = require('./food.model');
var core_1 = require('@angular/core');
var EditFoodComponent = (function () {
    function EditFoodComponent() {
        this.doneButtonClickedSender = new core_1.EventEmitter();
        this.deleteSender = new core_1.EventEmitter();
    }
    EditFoodComponent.prototype.doneButtonClicked = function (foodItem) {
        this.doneButtonClickedSender.emit();
        foodItem.isBeingEdited = false;
    };
    EditFoodComponent.prototype.deleteButtonClicked = function (foodItem) {
        this.deleteSender.emit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', food_model_1.Food)
    ], EditFoodComponent.prototype, "childSelectedFood", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EditFoodComponent.prototype, "doneButtonClickedSender", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EditFoodComponent.prototype, "deleteSender", void 0);
    EditFoodComponent = __decorate([
        core_1.Component({
            selector: 'edit-food',
            template: "\n  <div class=\"well\" *ngIf=\"childSelectedFood\">\n    <h5>Edit \"{{childSelectedFood.name}}\"</h5>\n    <div class=\"input-field\">\n      <input type=\"text\" [(ngModel)]=\"childSelectedFood.name\">\n      <label class=\"active\">Name:</label>\n    </div>\n    <div class=\"input-field\">\n      <input type=\"text\" [(ngModel)]=\"childSelectedFood.details\">\n      <label class=\"active\">Details:</label>\n    <div class=\"input-field\">\n      <input [(ngModel)]=\"childSelectedFood.calories\" type=\"number\">\n      <label class=\"active\">Calories:</label>\n    </div>\n    <br>\n    <button class=\"btn waves-effect waves-light\" (click)=\"doneButtonClicked(childSelectedFood)\">Done</button>\n    <button class=\"btn waves-effect waves-light\" (click)=\"deleteButtonClicked(childSelectedFood)\">Remove</button>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], EditFoodComponent);
    return EditFoodComponent;
}());
exports.EditFoodComponent = EditFoodComponent;
//# sourceMappingURL=edit-food.component.js.map
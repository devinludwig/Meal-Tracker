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
    }
    EditFoodComponent.prototype.doneButtonClicked = function () {
        this.doneButtonClickedSender.emit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', food_model_1.Food)
    ], EditFoodComponent.prototype, "childSelectedFood", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EditFoodComponent.prototype, "doneButtonClickedSender", void 0);
    EditFoodComponent = __decorate([
        core_1.Component({
            selector: 'edit-food',
            template: "\n  <form class=\"form-inline\" *ngIf=\"childSelectedFood\">\n    <h3>Edit Food Item Below</h3>\n    <label>Name:</label>\n    <input class=\"form-control\" [(ngModel)]=\"childSelectedFood.name\">\n    <label>Details:</label>\n    <input class=\"form-control\" [(ngModel)]=\"childSelectedFood.details\">\n    <label>Calories:</label>\n    <input class=\"form-control\" [(ngModel)]=\"childSelectedFood.calories\" type=\"number\">\n    <br>\n    <button (click)=\"doneButtonClicked()\">Done</button>\n  </form>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], EditFoodComponent);
    return EditFoodComponent;
}());
exports.EditFoodComponent = EditFoodComponent;
//# sourceMappingURL=edit-food.component.js.map
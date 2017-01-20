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
var core_1 = require('@angular/core');
var FoodListComponent = (function () {
    function FoodListComponent() {
        this.clickSender = new core_1.EventEmitter();
        this.filterByCalorieContent = "allFoods";
    }
    FoodListComponent.prototype.onChange = function (optionFromMenu) {
        this.filterByCalorieContent = optionFromMenu;
    };
    FoodListComponent.prototype.foodHasBeenClicked = function (clickedFood) {
        this.clickSender.emit(clickedFood);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], FoodListComponent.prototype, "childFoodList", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FoodListComponent.prototype, "clickSender", void 0);
    FoodListComponent = __decorate([
        core_1.Component({
            selector: 'food-list',
            template: "\n  <select (change)=\"onChange($event.target.value)\">\n    <option value=\"allFoods\">All Foods</option>\n    <option value=\"highCalorieFoods\">High Calorie Foods</option>\n    <option value=\"lowCalorieFoods\">Low Calorie Foods</option>\n  </select>\n  <ul class=\"list-group\">\n   <li class=\"list-group-item justify-content-between\" (click)=\"foodHasBeenClicked(currentFood)\" *ngFor=\"let currentFood of childFoodList | calorieContent:filterByCalorieContent\">{{currentFood.name}} {{currentFood.details}}  <span class=\"badge badge-default badge-pill\">{{currentFood.calories}}</span>\n   </li>\n  </ul>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], FoodListComponent);
    return FoodListComponent;
}());
exports.FoodListComponent = FoodListComponent;
//# sourceMappingURL=food-list.component.js.map
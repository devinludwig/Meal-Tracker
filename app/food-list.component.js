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
        this.totalCalories = 0;
        this.filterByCalorieContent = "allFoods";
    }
    FoodListComponent.prototype.tallyCalories = function () {
        var _this = this;
        this.totalCalories = 0;
        this.childFoodList.forEach(function (foodItem) {
            _this.totalCalories = _this.totalCalories + foodItem.calories;
        });
        return this.totalCalories;
    };
    FoodListComponent.prototype.onChange = function (optionFromMenu) {
        this.filterByCalorieContent = optionFromMenu;
    };
    FoodListComponent.prototype.foodHasBeenClicked = function (clickedFood) {
        this.clickSender.emit(clickedFood);
        this.childFoodList.forEach(function (foodItem) {
            foodItem.isBeingEdited = false;
        });
        clickedFood.isBeingEdited = true;
    };
    FoodListComponent.prototype.beingEdited = function (foodItem) {
        if (foodItem.isBeingEdited === false) {
            return "collection-item row";
        }
        else {
            return "collection-item row active";
        }
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
            template: "\n  <div *ngIf=\"childFoodList.length\" class=\"collection with-header\">\n    <div class=\"collection-header\">\n      <form action=\"#\" (change)=\"onChange($event.target.value)\">\n          <input name=\"calorie-content\" value=\"allFoods\" type=\"radio\" id=\"all\"/>\n          <label for=\"all\">All Foods</label>\n          <input name=\"calorie-content\" value=\"highCalorieFoods\" type=\"radio\" id=\"high\"/>\n          <label for=\"high\">High Calorie Foods</label>\n          <input name=\"calorie-content\" value=\"lowCalorieFoods\" type=\"radio\" id=\"low\"/>\n          <label for=\"low\">Low Calorie Foods</label>\n      </form>\n    </div>\n    <a href=\"#!\" [class]=\"beingEdited(currentFood)\" (click)=\"foodHasBeenClicked(currentFood)\" *ngFor=\"let currentFood of childFoodList | calorieContent:filterByCalorieContent\">\n      <div class=\"col s5\">{{currentFood.name}}</div>\n      <div class=\"col s5\">{{currentFood.details}}</div>\n      <span class=\"new badge\" data-badge-caption=\"Calories\">{{currentFood.calories}}</span>\n    </a>\n    <div class=\"collection-item row\">\n      <p>Total Calories Today:<span class=\"new badge\" data-badge-caption=\"Calories\">{{tallyCalories()}}</span></p>\n    </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], FoodListComponent);
    return FoodListComponent;
}());
exports.FoodListComponent = FoodListComponent;
//# sourceMappingURL=food-list.component.js.map
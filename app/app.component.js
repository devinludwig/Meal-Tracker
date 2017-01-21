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
var AppComponent = (function () {
    function AppComponent() {
        this.selectedFood = null;
        this.masterFoodList = [];
    }
    AppComponent.prototype.addFood = function (newFood) {
        this.masterFoodList.push(newFood);
    };
    AppComponent.prototype.editFood = function (clickedFood) {
        this.selectedFood = clickedFood;
    };
    AppComponent.prototype.finishedEditing = function () {
        this.selectedFood = null;
    };
    AppComponent.prototype.delete = function (foodItem) {
        this.masterFoodList.splice(this.masterFoodList.indexOf(foodItem), 1);
        this.selectedFood = null;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: "\n  <div class=\"container\">\n    <nav>\n    <div class=\"nav-wrapper z-depth-5\">\n      <p class=\"brand-logo left\">Calorie Conductor</p>\n      <h5 class=\"right\">Your Diet Assistant</h5>\n    </div>\n    </nav>\n    <food-list [childFoodList]=\"masterFoodList\" (clickSender)=\"editFood($event)\"></food-list>\n    <edit-food [childSelectedFood]=\"selectedFood\" (doneButtonClickedSender)=\"finishedEditing()\" (deleteSender)=\"delete(selectedFood)\"></edit-food>\n    <new-food [childSelectedFood]=\"selectedFood\" (newFoodSender)=\"addFood($event)\"></new-food>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
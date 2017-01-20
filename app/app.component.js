"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.currentTime = new Date;
        this.month = this.currentTime.getMonth() + 1;
        this.day = this.currentTime.getDate();
        this.year = this.currentTime.getFullYear();
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
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: "\n  <div class=\"container\">\n    <h1>Calorie Conductor</h1>\n    <h3>Your Diet Assistant</h3>\n    <food-list [childFoodList]=\"masterFoodList\" (clickSender)=\"editFood($event)\"></food-list>\n    <hr>\n    <edit-food [childSelectedFood]=\"selectedFood\" (doneButtonClickedSender)=\"finishedEditing()\"></edit-food>\n    <new-food (newFoodSender)=\"addFood($event)\"></new-food>\n  </div>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
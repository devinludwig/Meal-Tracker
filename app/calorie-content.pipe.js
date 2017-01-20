"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var CalorieContentPipe = (function () {
    function CalorieContentPipe() {
    }
    CalorieContentPipe.prototype.transform = function (input, selectedCalorieContent) {
        var output = [];
        if (selectedCalorieContent === "highCalorieFoods") {
            input.forEach(function (food) {
                if (food.calories >= 500) {
                    output.push(food);
                }
            });
            return output;
        }
        else if (selectedCalorieContent === "lowCalorieFoods") {
            input.forEach(function (food) {
                if (food.calories < 500) {
                    output.push(food);
                }
            });
            return output;
        }
        else {
            return input;
        }
    };
    return CalorieContentPipe;
}());
CalorieContentPipe = __decorate([
    core_1.Pipe({
        name: "calorieContent",
        pure: false
    })
], CalorieContentPipe);
exports.CalorieContentPipe = CalorieContentPipe;
//# sourceMappingURL=calorie-content.pipe.js.map
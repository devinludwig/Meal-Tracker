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
var core_1 = require("@angular/core");
var food_model_1 = require("./food.model");
var NewFoodComponent = (function () {
    function NewFoodComponent() {
        this.newFoodSender = new core_1.EventEmitter();
    }
    NewFoodComponent.prototype.submitForm = function (name, details, calories) {
        if (name !== '' && calories !== null) {
            var newFoodToAdd = new food_model_1.Food(name, details, parseInt(calories));
            console.log(newFoodToAdd);
            this.newFoodSender.emit(newFoodToAdd);
        }
    };
    return NewFoodComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", food_model_1.Food)
], NewFoodComponent.prototype, "childSelectedFood", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], NewFoodComponent.prototype, "newFoodSender", void 0);
NewFoodComponent = __decorate([
    core_1.Component({
        selector: 'new-food',
        template: "\n  <form class=\"well\" *ngIf=\"!childSelectedFood\" (submit)=\"submitForm(newName.value, newDetails.value, newCalories.value); newName.value=''; newDetails.value=''; newCalories.value=null;\">\n    <div class=\"input-field\">\n      <input #newName type=\"text\" autofocus required>\n      <label>What Did You Eat?</label>\n    </div>\n    <div class=\"input-field\">\n      <input #newDetails type=\"text\">\n      <label>Any Details You Want to Add?</label>\n    </div>\n    <div class=\"input-field\">\n      <input type=\"number\" #newCalories required>\n      <label>How Many Calories Were in it?</label>\n    </div>\n    <button class=\"btn waves-effect waves-light\" type=\"submit\">Add</button>\n  </form>\n  "
    })
], NewFoodComponent);
exports.NewFoodComponent = NewFoodComponent;
//# sourceMappingURL=new-food.component.js.map
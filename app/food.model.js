"use strict";
var Food = (function () {
    function Food(name, details, calories) {
        this.name = name;
        this.details = details;
        this.calories = calories;
        this.isBeingEdited = false;
        this.timeStamp = new Date;
    }
    return Food;
}());
exports.Food = Food;
//# sourceMappingURL=food.model.js.map
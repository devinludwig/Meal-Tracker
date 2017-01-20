import { Pipe, PipeTransform } from '@angular/core';
import { Food } from './food.model';

@Pipe({
  name: "calorieContent",
  pure: false
})

export class CalorieContentPipe implements PipeTransform {
  transform(input: Food[], selectedCalorieContent) {
    var output: Food[] = []
    if(selectedCalorieContent === "highCalorieFoods") {
      input.forEach(function(food){
        if (food.calories >= 500) {
          output.push(food);
        }
      })
      return output;
    } else if (selectedCalorieContent === "lowCalorieFoods") {
      input.forEach(function(food){
        if (food.calories < 500) {
          output.push(food);
        }
      })
      return output;
    } else {
      return input;
    }
  }
}

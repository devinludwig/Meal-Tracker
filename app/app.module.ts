import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { CalorieContentPipe } from './calorie-content.pipe';
import { FoodListComponent } from './food-list.component';
import { EditFoodComponent } from './edit-food.component';
import { NewFoodComponent } from './new-food.component';


@NgModule({
  imports: [ BrowserModule,
              FormsModule ],
  declarations: [ AppComponent,
                  FoodListComponent,
                  EditFoodComponent,
                  NewFoodComponent,
                  CalorieContentPipe,
                  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}

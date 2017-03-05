import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

/** Declarations and Exports**/
import { Products } from './products.component';

/** Custom Imports **/
import { routing }       from './products.routing';
import { BeefModule } from './components/beef/beef.module';
import { ChickenModule } from './components/chicken/chicken.module';
import { DairyModule } from './components/dairy/dairy.module';
//import { FishModule } from './components/fish/fruits-and-vegetables.module';
import { FruitsAndVegetablesModule } from './components/fruits-and-vegetables/fruits-and-vegetables.module';
import { GrainsModule } from './components/grains/grains.module';
//import { ProcessedFoodModule } from './components/processed-foods/processed-foods.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    BeefModule,
    ChickenModule,
    DairyModule,
//    FishModule,
    FruitsAndVegetablesModule,
    GrainsModule,
//    ProcessedFoodModule,
    routing
  ],
  declarations: [
    Products
  ],
  providers: [
  ]
})
export default class ProductsModule {}

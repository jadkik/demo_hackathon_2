import { Routes, RouterModule }  from '@angular/router';

import { Beef } from './components/beef/beef.component';
import { Chicken } from './components/chicken/chicken.component';
import { Dairy } from './components/dairy/dairy.component';
import { Fish } from './components/fish/fish.component';
import { FruitsAndVegetables } from './components/fruits-and-vegetables/fruits-and-vegetables.component';
import { Grains } from './components/grains/grains.component';
import { ProcessedFoods } from './components/processed-foods/processed-foods.component';

import { Products } from './products.component';

const routes: Routes = [
  {
    path: '',
    component: Products,
    children: [
        { path: 'beef', component: Beef },
        { path: 'chicken', component: Chicken },
        { path: 'dairy', component: Dairy },
//        { path: 'fish', component: Fish },
        { path: 'fruits-and-vegetables', component: FruitsAndVegetables },
        { path: 'grains', component: Grains },
//        { path: 'processed-foods', component: ProcessedFoods }
    ]
  }
];

export const routing = RouterModule.forChild(routes);

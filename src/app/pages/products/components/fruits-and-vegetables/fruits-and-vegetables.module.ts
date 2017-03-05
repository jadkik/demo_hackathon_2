import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgaModule } from '../../../../theme/nga.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { FruitsAndVegetables } from './fruits-and-vegetables.component';
import { FruitsAndVegetablesService } from './fruits-and-vegetables.service';
import { FruitsAndVegetablesStore } from './fruits-and-vegetables.store';

@NgModule({
    imports: [
        CommonModule,
        Ng2SmartTableModule,
        NgaModule
    ],
    exports: [
            FruitsAndVegetables
    ],
    declarations: [
            FruitsAndVegetables
    ],
    providers: [
            FruitsAndVegetablesStore,
            FruitsAndVegetablesService
    ]
})

export class FruitsAndVegetablesModule { }

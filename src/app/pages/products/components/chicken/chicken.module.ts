import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgaModule } from '../../../../theme/nga.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { Chicken } from './chicken.component';
import { ChickenService } from './chicken.service';
import { ChickenStore } from './chicken.store';

@NgModule({
    imports: [
        CommonModule,
        Ng2SmartTableModule,
        NgaModule
    ],
    exports: [
            Chicken
    ],
    declarations: [
            Chicken
    ],
    providers: [
            ChickenStore,
            ChickenService
    ]
})

export class ChickenModule { }

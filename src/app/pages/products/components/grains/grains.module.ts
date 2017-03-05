import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgaModule } from '../../../../theme/nga.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { Grains } from './grains.component';
import { GrainsService } from './grains.service';
import { GrainsStore } from './grains.store';

@NgModule({
    imports: [
        CommonModule,
        Ng2SmartTableModule,
        NgaModule
    ],
    exports: [
            Grains
    ],
    declarations: [
            Grains
    ],
    providers: [
            GrainsStore,
            GrainsService
    ]
})

export class GrainsModule { }

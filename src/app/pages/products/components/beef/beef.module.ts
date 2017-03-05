import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgaModule } from '../../../../theme/nga.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { Beef } from './beef.component';
import { BeefService } from './beef.service';
import { BeefStore } from './beef.store';

@NgModule({
    imports: [
        CommonModule,
        Ng2SmartTableModule,
        NgaModule
    ],
    exports: [
            Beef
    ],
    declarations: [
            Beef
    ],
    providers: [
            BeefStore,
            BeefService
    ]
})

export class BeefModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgaModule } from '../../../../theme/nga.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { Dairy } from './dairy.component';
import { DairyService } from './dairy.service';
import { DairyStore } from './dairy.store';

@NgModule({
    imports: [
        CommonModule,
        Ng2SmartTableModule,
        NgaModule
    ],
    exports: [
            Dairy
    ],
    declarations: [
            Dairy
    ],
    providers: [
            DairyStore,
            DairyService
    ]
})

export class DairyModule { }

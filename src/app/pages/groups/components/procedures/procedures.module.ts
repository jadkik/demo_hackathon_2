import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgaModule } from '../../../../theme/nga.module';

/** Declarations and Exports **/
import { ProceduresWrapper } from './procedures-wrapper.component';

/** Providers **/
import { ProceduresStore } from './proceduresStore';
import { UsableContentBackend } from '../../../../usable-content/usableContentBackend.service';

/** Custom Imports **/
import { UsableContentModule } from '../../../../usable-content/usable-content.module';


@NgModule({
    imports: [
        CommonModule,
        NgaModule,
        UsableContentModule
    ],
    exports: [
        ProceduresWrapper
    ],
    declarations: [
        ProceduresWrapper
    ],
    providers: [
        ProceduresStore,
        UsableContentBackend
    ]
})

export class ProceduresModule { }

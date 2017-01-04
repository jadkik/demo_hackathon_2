import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgaModule } from '../../../../theme/nga.module';

/** Declarations and Exports **/
import { FoldersWrapper } from './folders-wrapper.component';

/** Providers **/
import { FoldersStore } from './foldersStore';
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
        FoldersWrapper
    ],
    declarations: [
        FoldersWrapper
    ],
    providers: [
        FoldersStore,
        UsableContentBackend
    ]
})

export class FoldersModule { }

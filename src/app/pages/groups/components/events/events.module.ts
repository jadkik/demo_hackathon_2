import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgaModule } from '../../../../theme/nga.module';

/** Declarations and Exports **/
import { EventsWrapper } from './events-wrapper.component';

/** Providers **/
import { EventsStore } from './eventsStore';
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
        EventsWrapper
    ],
    declarations: [
        EventsWrapper
    ],
    providers: [
        EventsStore,
        UsableContentBackend
    ]
})

export class EventsModule { }

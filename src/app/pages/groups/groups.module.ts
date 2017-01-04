import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

/** Declarations and Exports**/
import { Groups } from './groups.component';

/** Custom Imports **/
import { routing }       from './groups.routing';
import { EventsModule } from './components/events/events.module';
import { FoldersModule } from './components/folders/folders.module';
import { ProceduresModule } from './components/procedures/procedures.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    EventsModule,
    FoldersModule,
    ProceduresModule,
    routing
  ],
  declarations: [
    Groups
  ],
  providers: [
  ]
})
export default class GroupsModule {}

import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { EventsModule } from './components/events/events.module';

import { Groups } from './groups.component';
import { routing }       from './groups.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    EventsModule,
    routing
  ],
  declarations: [
    Groups
  ],
  providers: [
  ]
})
export default class GroupsModule {}

import { Routes, RouterModule }  from '@angular/router';

import { EventsWrapper } from './components/events/events-wrapper.component';
import { FoldersWrapper } from './components/folders/folders-wrapper.component';
import { ProceduresWrapper } from './components/procedures/procedures-wrapper.component';

import { Groups } from './groups.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Groups,
    children: [
        { path: 'events', component: EventsWrapper },
        { path: 'folders', component: FoldersWrapper },
        { path: 'procedures', component: ProceduresWrapper }
    ]
  }
];

export const routing = RouterModule.forChild(routes);

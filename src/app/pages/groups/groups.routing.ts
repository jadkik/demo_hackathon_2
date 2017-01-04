import { Routes, RouterModule }  from '@angular/router';

import { EventsWrapper } from './components/events/events-wrapper.component';

import { Groups } from './groups.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Groups,
    children: [
        { path: 'events', component: EventsWrapper }
    ]
  }
];

export const routing = RouterModule.forChild(routes);

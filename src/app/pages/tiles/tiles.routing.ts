import { Routes, RouterModule }  from '@angular/router';

import { Widgets } from './components/widgets/widgets.component';
import { Themes } from './components/themes/themes.component';
import { Tiles } from './tiles.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Tiles,
    children: [
      { path: 'widgets', component: Widgets },
      { path: 'themes', component: Themes }
    ]
  }
];

export const routing = RouterModule.forChild(routes);

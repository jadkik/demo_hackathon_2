import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';


const routes: Routes = [
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: () => System.import('./home/login.module') },
      { path: 'dashboard', loadChildren: () => System.import('./dashboard/dashboard.module') },
      { path: 'products', loadChildren: () => System.import('./products/products.module') }
    ]
  }
];

export const routing = RouterModule.forChild(routes);

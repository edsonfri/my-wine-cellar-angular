import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'wines' },
  { path: 'wines',
    loadChildren: () => import('./wines/wines.module').then(m => m.WinesModule)
  }
];

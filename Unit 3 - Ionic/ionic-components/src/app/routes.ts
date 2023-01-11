import { Routes } from '@angular/router';
export const APP_ROUTES: Routes = [
  {
    path: 'buttons',
    loadComponent: () =>
      import('./buttons-page/buttons-page.component').then(
        (m) => m.ButtonsPageComponent
      ),
  },
  {
    path: 'list',
    loadComponent: () =>
      import('./list-page/list-page.component').then(
        (m) => m.ListPageComponent
      ),
  },
  {
    path: 'inputs',
    loadComponent: () =>
      import('./inputs-page/inputs-page.component').then(
        (m) => m.InputsPageComponent
      ),
  },
  {
    path: 'cards',
    loadComponent: () =>
      import('./cards-page/cards-page.component').then(
        (m) => m.CardsPageComponent
      ),
  },
  {
    path: '',
    redirectTo: '/buttons',
    pathMatch: 'full'
  }
];

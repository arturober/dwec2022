import { Routes } from '@angular/router';
export const APP_ROUTES: Routes = [
  {
    path: 'badges',
    loadComponent: () =>
      import('./badges-chips/badges-chips.component').then(
        (m) => m.BadgesChipsComponent
      ),
  },
  {
    path: 'buttons',
    loadComponent: () =>
      import('./buttons-page/buttons-page.component').then(
        (m) => m.ButtonsPageComponent
      ),
  },
  {
    path: 'checkbox',
    loadComponent: () =>
      import('./checkbox-radio-page/input-radio-page.component').then(
        (m) => m.InputRadioPageComponent
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
    path: 'toast',
    loadComponent: () =>
      import('./toast-page/toast-page.component').then(
        (m) => m.ToastPageComponent
      ),
  },
  {
    path: 'alert',
    loadComponent: () =>
      import('./alert-page/alert.component').then(
        (m) => m.AlertComponent
      ),
  },
  {
    path: 'action-sheet',
    loadComponent: () =>
      import('./action-sheet-page/action-sheet-page.component').then(
        (m) => m.ActionSheetPageComponent
      ),
  },
  {
    path: 'fabs',
    loadComponent: () =>
      import('./fabs-page/fabs-page.component').then(
        (m) => m.FabsPageComponent
      ),
  },
  {
    path: 'grid',
    loadComponent: () =>
      import('./grid-page/grid-page.component').then(
        (m) => m.GridPageComponent
      ),
  },
  {
    path: 'horizontal-scroll',
    loadComponent: () =>
      import('./horizontal-scroll-page/horizontal-scroll-page.component').then(
        (m) => m.HorizontalScrollPageComponent
      ),
  },
  {
    path: 'loading',
    loadComponent: () =>
      import('./loading-page/loading-page.component').then(
        (m) => m.LoadingPageComponent
      ),
  },
  {
    path: 'popover',
    loadComponent: () =>
      import('./popover-page/popover-page.component').then(
        (m) => m.PopoverPageComponent
      ),
  },
  {
    path: 'range',
    loadComponent: () =>
      import('./range-page/range-page.component').then(
        (m) => m.RangePageComponent
      ),
  },
  {
    path: 'refresher',
    loadComponent: () =>
      import('./refresher-page/refresher-page.component').then(
        (m) => m.RefresherPageComponent
      ),
  },
  {
    path: '',
    redirectTo: '/buttons',
    pathMatch: 'full'
  }
];

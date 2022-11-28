import { Routes } from '@angular/router';
import { leavePageGuard } from './guards/leave-page.guard';
import { productIdGuard } from './products/guards/product-id.guard';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { productResolver } from './products/resolvers/product.resolver';
import { WelcomeComponent } from './welcome/welcome.component';

export const APP_ROUTES: Routes = [
  {
    path: 'welcome',
    loadComponent: () =>
      import('./welcome/welcome.component').then((m) => m.WelcomeComponent),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/routes').then((m) => m.PRODUCT_ROUTES),
  },
  // Default route (empty) -> Redirect to welcome page
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  // Doesn't match any of the above
  { path: '**', redirectTo: '/welcome' },
];

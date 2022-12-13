import { Routes } from '@angular/router';
import { leavePageGuard } from '../guards/leave-page.guard';
import { productIdGuard } from './guards/product-id.guard';
import { productResolver } from './resolvers/product.resolver';

export const PRODUCT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./product-list/product-list.component').then(
      (m) => m.ProductListComponent
    ),
  },
  {
    path: 'add',
    loadComponent: () => import('./product-form/product-form.component').then(
      (m) => m.ProductFormComponent
    ),
    canDeactivate: [leavePageGuard],
  },
  // :id is a parameter (product's id)
  {
    path: ':id',
    loadComponent: () => import('./product-detail/product-detail.component').then(
      (m) => m.ProductDetailComponent
    ),
    canActivate: [productIdGuard],
    resolve: {
      product: productResolver,
    },
  },
  {
    path: ':id/edit',
    loadComponent: () => import('./product-form/product-form.component').then(
      (m) => m.ProductFormComponent
    ),
    canDeactivate: [leavePageGuard],
    canActivate: [productIdGuard],
    resolve: {
      product: productResolver,
    }
  },
];

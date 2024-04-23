import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: async () => await import('./shop/shop.component'),
  },
  {
    path: 'cart',
    loadComponent: async () => await import('./shop/cart/cart.component'),
  },
  {
    path: ':category',
    loadComponent: async () => await import('./shop/shop.component'),
  },
  {
    path: 'products/:id',
    loadComponent: async () =>
      await import('./shared/UIElemnts/big-card/big-card.component'),
  },
];

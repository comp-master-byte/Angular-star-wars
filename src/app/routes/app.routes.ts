import { Routes } from '@angular/router';
import { loggedInGuard } from '@shared/guards';

export const routes: Routes = [
  {
    path: 'sign-in',
    loadComponent: () => import('@features/auth/sign-in/auth-page').then((m) => m.AuthPage),
    canActivate: [loggedInGuard],
  },
  {
    path: 'sign-up',
    loadComponent: () => import('@features/auth/sign-up/sign-up-page').then((m) => m.SignUpPage),
    canActivate: [loggedInGuard],
  },
  {
    path: 'reset-password',
    loadComponent: () => import('@features/auth/reset-password/reset-password-page').then((m) => m.ResetPasswordPage),
    canActivate: [loggedInGuard],
  },
  {
    path: '',
    loadChildren: () => import('./main.routes').then((m) => m.MAIN_ROUTES),
  },
  {
    path: 'account',
    loadChildren: () => import('./account.routes').then((m) => m.ACCOUNT_ROUTES),
  },
  { path: '**', redirectTo: '' },
];
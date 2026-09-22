import { Routes } from '@angular/router';
import { authGuard } from '@shared/guards';

export const ACCOUNT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@features/account/layout/account-layout').then((m) => m.AccountLayout),
    children: [
      {
        path: 'profile',
        canActivate: [authGuard],
        loadComponent: () =>
          import('@features/account/profile/profile-page').then((m) => m.ProfilePage),
      },
      {
        path: 'favorites',
        loadComponent: () =>
          import('@features/account/favorites/favorites-page').then((m) => m.FavoritesPage),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('@features/account/settings/layout/settings-layout').then((m) => m.SettingsLayout),
        children: [
          {
            path: 'appearance',
            loadComponent: () =>
              import('@features/account/settings/appearance/appearance-page').then((m) => m.AppearancePage),
          },
          {
            path: 'security',
            canActivate: [authGuard],
            loadComponent: () =>
              import('@features/account/settings/security/security-page').then((m) => m.SecurityPage),
          },
        ],
      },
    ],
  },
];

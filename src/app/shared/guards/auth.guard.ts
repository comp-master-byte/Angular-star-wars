import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '@shared/services';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if (!authService.isAuthed) {
    return router.createUrlTree(['/sign-in']);
  }

  return true;
};

export const loggedInGuard: CanActivateFn = () => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if (authService.isAuthed) {
    return router.createUrlTree(['/']);
  }

  return true;
};

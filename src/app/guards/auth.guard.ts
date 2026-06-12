import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard = () => {
  const router = inject(Router);
  const isLoggedIn = localStorage.getItem('token') !== null;

  if (isLoggedIn) return true;

  router.navigate(['/login']);
  return false;
};

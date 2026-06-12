import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/post-list/post-list').then((m) => m.PostList),
    canActivate: [authGuard],
  },
  { path: 'login', loadComponent: () => import('./components/login/login').then((m) => m.Login) },
  {
    path: 'add',
    loadComponent: () => import('./components/add-post/add-post').then((m) => m.AddPost),
    canActivate: [authGuard],
  },

  {
    path: 'posts/edit/:id',
    loadComponent: () => import('./components/edit-post/edit-post').then((m) => m.EditPost),
    canActivate: [authGuard],
  },
  {
    path: 'posts/:id',
    loadComponent: () => import('./components/post-detail/post-detail').then((m) => m.PostDetail),
    canActivate: [authGuard],
  },
];

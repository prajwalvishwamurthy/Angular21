import { Routes } from '@angular/router';
import { NotFound } from './not-found/not-found';
import { Vehicles } from './vehicles/vehicles';
import { Subscribe } from './subscribe/subscribe';
import { Home } from './home/home';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'subscribe',
    component: Subscribe,
  },
  {
    path: 'vehicles',
    component: Vehicles,
  },
  {
    path: '**',
    component: NotFound,
  },
];

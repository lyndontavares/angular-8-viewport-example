import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { PageHighlightingComponent } from '../page-highlighting';
import { PageInfiniteScrollComponent } from '../page-infinite-scroll';
import { PageLazyImagesComponent } from '../page-lazy-images';

const ROUTES: Routes = [
  {
    path: 'highlighting',
    pathMatch: 'full',
    component: PageHighlightingComponent
  },
  {
    path: 'infinite-scroll',
    pathMatch: 'full',
    component: PageInfiniteScrollComponent
  },
  {
    path: 'lazy-images',
    pathMatch: 'full',
    component: PageLazyImagesComponent
  },
  {
    path: '**',
    redirectTo: '/highlighting'
  },
];

const ROUTER_OPTIONS: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled'
};

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, ROUTER_OPTIONS)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared';
import { LazyImgDirective } from './lazy-img.directive';
import { LazyImgSkeletonComponent } from './lazy-img-skeleton';
import { PageLazyImagesComponent } from './page-lazy-images.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [
    PageLazyImagesComponent,
    LazyImgDirective,
    LazyImgSkeletonComponent
  ],
  exports: [
    PageLazyImagesComponent
  ],
  entryComponents: [
    PageLazyImagesComponent
  ]
})
export class PageLazyImagesModule { }

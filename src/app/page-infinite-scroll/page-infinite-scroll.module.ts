import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared';
import { PageInfiniteScrollComponent } from './page-infinite-scroll.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    PageInfiniteScrollComponent
  ],
  exports: [
    PageInfiniteScrollComponent
  ],
  entryComponents: [
    PageInfiniteScrollComponent
  ]
})
export class PageInfiniteScrollModule { }

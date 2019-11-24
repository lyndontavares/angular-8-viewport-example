import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared';
import { PageHighlightingComponent } from './page-highlighting.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    PageHighlightingComponent
  ],
  exports: [
    PageHighlightingComponent
  ],
  entryComponents: [
    PageHighlightingComponent
  ]
})
export class PageHighlightingModule { }

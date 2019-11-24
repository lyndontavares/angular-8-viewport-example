import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared';
import { PageHighlightingModule } from './page-highlighting';
import { PageInfiniteScrollModule } from './page-infinite-scroll';
import { PageLazyImagesModule } from './page-lazy-images';
import { RoutingModule } from './routing';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    PageHighlightingModule,
    PageInfiniteScrollModule,
    PageLazyImagesModule,
    RoutingModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

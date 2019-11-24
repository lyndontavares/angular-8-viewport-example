import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatDrawerContent } from '@angular/material';

type AppLabels = { [key: string]: string };

interface NavLink {
  path: string;
  label: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(MatDrawerContent, { static:true, read: ElementRef })
  public readonly drawerContent: ElementRef;

  public readonly labels: AppLabels = {
    toolbar: 'Example of ng-in-viewport',
    highlighting: 'Highlighting',
    lazyImages: 'Lazy images',
    infiniteScroll: 'Infinite scroll'
  };

  public readonly navLinks: NavLink[] = [
    {
      path: '/highlighting',
      label: this.labels.highlighting
    },
    {
      path: '/lazy-images',
      label: this.labels.lazyImages
    },
    {
      path: '/infinite-scroll',
      label: this.labels.infiniteScroll
    }
  ];

  public scrollTop(): void {
    if (this.drawerContent) {
      this.drawerContent.nativeElement.scrollTop = 0;
    }
  }
}

import { Component, OnInit, Renderer2 } from '@angular/core';
import { InViewportMetadata } from 'ng-in-viewport';

const ELEMENTS = 100;

@Component({
  selector: 'page-highlighting',
  templateUrl: './page-highlighting.component.html',
  styleUrls: ['./page-highlighting.component.scss']
})
export class PageHighlightingComponent implements OnInit {
  public gridTiles: Array<number>;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.gridTiles = Array(ELEMENTS).fill(1).map((v, k) => v + k);
  }

  highlightTile(event) {
    const { [InViewportMetadata]: { entry }, target, visible } = event;

    const addClass = visible ? 'active' : 'inactive';
    this.renderer.addClass(target, addClass);

    const rmClass = visible ? 'inactive' : 'active';
    this.renderer.removeClass(target, rmClass);
  }
}

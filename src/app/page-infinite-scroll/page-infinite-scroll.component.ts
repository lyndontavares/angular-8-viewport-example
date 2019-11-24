import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { delay, tap, take } from 'rxjs/operators';

const ELEMENTS_PER_PAGE = 5;

@Component({
  selector: 'page-infinite-scroll',
  templateUrl: './page-infinite-scroll.component.html',
  styleUrls: ['./page-infinite-scroll.component.scss']
})
export class PageInfiniteScrollComponent implements OnInit {
  public readonly loading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public readonly cards: BehaviorSubject<any[]> = new BehaviorSubject([]);
  public readonly pages: number = 20;
  public page: number = 1;

  public ngOnInit(): void {
    this.cards.next(this.mapCards([
      ...this.generateCards()
    ]));
  }

  private generateCards(): number[] {
    return Array(ELEMENTS_PER_PAGE).fill(1);
  }

  private mapCards(cards: number[]): number[] {
    return cards.fill(1).map((v, k) => v + k);
  }

  public isEven(value: number): boolean {
    return !(value % 2);
  }

  public isOdd(value: number): boolean {
    return !this.isEven(value);
  }

  public loadMore(event): void {
    if (this.page >= this.pages || (event && !event.visible)) {
      return;
    }

    of([
      ...this.cards.getValue(),
      ...this.generateCards()
    ])
      .pipe(
        tap(() => this.loading.next(true)),
        delay(500),
        tap(() => this.loading.next(false)),
        take(1)
      )
      .subscribe((cards) => {
        this.page += 1;
        this.cards.next(this.mapCards(cards))
      });
  }
}

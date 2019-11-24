import { AfterViewInit, ContentChild, Directive, ElementRef, Input, OnDestroy, Renderer2 } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { InViewportDirective } from 'ng-in-viewport';
import { BehaviorSubject, Observable, Subscription, throwError } from 'rxjs';
import { catchError, delay, filter, take, tap } from 'rxjs/operators';

@Directive({
  selector: '[lazyImg]',
  exportAs: 'lazyImg'
})
export class LazyImgDirective implements AfterViewInit, OnDestroy {
  private static LOADING_CLASS_NAME = 'loading';
  private static LOADED_CLASS_NAME = 'loaded';

  private loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private loaded$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private readonly subscription: Subscription = new Subscription();

  public get loading(): boolean {
    return this.loading$.getValue();
  }

  public set loading(value: boolean) {
    this.loading$.next(value);
    if (value) {
      this.renderer.addClass(this.elementRef.nativeElement, LazyImgDirective.LOADING_CLASS_NAME);
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, LazyImgDirective.LOADING_CLASS_NAME);
    }
  }

  public get loaded(): boolean {
    return this.loaded$.getValue();
  }

  public set loaded(value: boolean) {
    this.loaded$.next(value);
    if (value) {
      this.renderer.addClass(this.elementRef.nativeElement, LazyImgDirective.LOADED_CLASS_NAME);
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, LazyImgDirective.LOADED_CLASS_NAME);
    }
  }

  @Input('lazyImg') private src: string;

  @ContentChild(InViewportDirective) private inViewport: InViewportDirective;

  constructor(private elementRef: ElementRef, private http: HttpClient, private renderer: Renderer2, private snackBar: MatSnackBar) { }

  public ngAfterViewInit(): void {
    if (this.inViewport) {
      this.subscription.add(
        this.inViewport.inViewportAction
          .pipe(
            filter(({ visible }) => visible),
            take(1)
          )
          .subscribe(() => this.load())
      );
    }
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public load(): void {
    this.loading = true;

    this.subscription.add(
      this.http.get(this.src, { responseType: 'blob' })
        .pipe(
          catchError(error => throwError(`Error during getting image from: ${this.src}`)),
          tap((data: Blob) => this.renderer.setAttribute(this.elementRef.nativeElement, 'src', URL.createObjectURL(data))),
          delay(10)
        )
        .subscribe(
          () => {
            this.loading = false;
            this.loaded = true;
          },
          (error) => {
            this.loading = false;
            this.snackBar.open(error, undefined, { duration: 3000, panelClass: 'error-snackbar' });
          }
        )
    );
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { StoreService } from '../store/store.service';

@Component({
  selector: 'lib-terms-lib',
  templateUrl: './terms-lib.component.html'
})
export class TermsLibComponent implements OnInit, OnDestroy {
  unsubscribe: Subject<void> = new Subject<void>();
  isStateActive: boolean;
  isStateActive$: Observable<boolean>;

  constructor(
    private storeService: StoreService,
  ) {
    this.storeService = storeService;
  }

  ngOnInit(): void {
    this.isStateActive$ = this.storeService.getIsStateActive().pipe(takeUntil(this.unsubscribe));
    this.isStateActive$.subscribe(isStateActive => {
      console.log(`isStateActive: ${isStateActive}`);
      this.isStateActive = isStateActive;
    });
  }

  updateIsStateActive(): void {
    this.storeService.updateIsStateActive(!this.isStateActive);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}

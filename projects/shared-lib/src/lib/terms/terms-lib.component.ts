import { Component, OnInit } from '@angular/core';
import { StoreService } from '../custom-redux/store.service';

@Component({
  selector: 'lib-terms-lib',
  templateUrl: './terms-lib.component.html'
})
export class TermsLibComponent implements OnInit {
  isStateActive: boolean;

  constructor(
    private storeService: StoreService,
  ) {
    this.storeService = storeService;
  }

  ngOnInit(): void {
    this.storeService.getStateSubject().subscribe(() =>
      this.isStateActive = this.storeService.getIsStateActive(),
    );
  }

  updateIsStateActive(): void {
    this.storeService.updateIsStateActive(!this.isStateActive);
  }
}

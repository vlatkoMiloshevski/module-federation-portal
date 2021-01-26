import { Component, OnInit } from '@angular/core';
import { StoreService, THEME } from 'shared-lib';
import { subject } from './claims.module';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html'
})
export class ClaimsComponent implements OnInit {
  theme: THEME;

  constructor(
    private storeService: StoreService,
  ) {
    this.storeService = storeService;
  }

  ngOnInit(): void {
    this.storeService.getStateSubject().subscribe(() =>
      this.theme = this.storeService.getTheme(),
    );
  }

  changeTheme(): void {
    const theme = this.theme === THEME.bright ? THEME.dark : THEME.bright;
    this.storeService.updateTheme(theme);
  }


}

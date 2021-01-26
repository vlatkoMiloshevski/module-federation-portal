import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from '../../environments/environment';
import { IAppState, StoreService, THEME } from 'shared-lib';
import { Observable } from 'rxjs';
import { subject } from '../app.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  flightsUrl: SafeResourceUrl;
  bookingUrl: SafeResourceUrl;
  cityUrl: SafeResourceUrl;
  countryUrl: SafeResourceUrl;
  theme: THEME;
  appState$: Observable<IAppState>;

  constructor(
    public sanitizer: DomSanitizer,
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

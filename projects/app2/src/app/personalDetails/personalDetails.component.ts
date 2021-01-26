import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IAppState, StoreService, THEME } from 'shared-lib';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personalDetails.component.html'
})
export class PersonalDetailsComponent implements OnInit {
  appState$: Observable<IAppState>;
  theme: THEME;

  constructor(
    private storeService: StoreService,
  ) {
    this.storeService.initState();
  }

  ngOnInit(): void {
    this.appState$ = this.storeService.getAppState();
    this.appState$.subscribe(appState => {
      this.theme = this.storeService.getTheme(appState);
    });
  }

  changeTheme(): void {
    const theme = this.theme === THEME.bright ? THEME.dark : THEME.bright;
    this.storeService.setTheme(theme);
  }
}

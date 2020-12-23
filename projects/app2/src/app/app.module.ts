import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CityModule } from './city/city.module';
import { APP_ROUTES } from './app.routes';
import { CountryModule } from './country/country.module';
import { SharedLibModule } from 'shared-lib';

@NgModule({
  imports: [
    BrowserModule,
    SharedLibModule,
    CityModule,
    CountryModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    HomeComponent,
    AppComponent,
  ],
  providers: [],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }

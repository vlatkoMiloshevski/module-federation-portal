import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConvictionsModule } from './convictions/convictions.module';
import { APP_ROUTES } from './app.routes';
import { ClaimsModule } from './claims/claims.module';
import { SharedLibModule } from 'shared-lib';

@NgModule({
  imports: [
    SharedLibModule,
    BrowserModule,
    ConvictionsModule,
    ClaimsModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  declarations: [
    HomeComponent,
    AppComponent,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }

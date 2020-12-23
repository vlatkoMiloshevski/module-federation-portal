import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { COUNTRY_ROUTES } from './country.routes';
import { CountryComponent } from './country.component';
import { SharedLibModule } from 'shared-lib';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(COUNTRY_ROUTES),
    SharedLibModule,
  ],
  declarations: [
    CountryComponent
  ]
})
export class CountryModule { }

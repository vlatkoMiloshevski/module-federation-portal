import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityComponent } from './city.component';
import { RouterModule } from '@angular/router';
import { CITY_ROUTES } from './city.routes';
import { SharedLibModule } from 'shared-lib';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CITY_ROUTES),
    SharedLibModule,
  ],
  declarations: [
    CityComponent,
  ]
})
export class CityModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FLIGHTS_ROUTES } from './booking.routes';
import { BookingComponent } from './booking.component';
import { SharedLibModule } from 'shared-lib';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FLIGHTS_ROUTES),
    SharedLibModule,
  ],
  declarations: [
    BookingComponent
  ]
})
export class BookingModule { }

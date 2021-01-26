import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvictionsComponent } from './convictions.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './convictions.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [
    ConvictionsComponent,
  ]
})
export class ConvictionsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ROUTES } from './claims.routes';
import { ClaimsComponent } from './claims.component';
import { SharedLibModule } from 'shared-lib';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedLibModule,
  ],
  declarations: [
    ClaimsComponent
  ]
})
export class ClaimsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalDetailsComponent } from './personalDetails.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './personalDetails.routes';
import { SharedLibModule } from 'shared-lib';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedLibModule,
  ],
  declarations: [
    PersonalDetailsComponent,
  ]
})
export class PersonalDetailsModule { }

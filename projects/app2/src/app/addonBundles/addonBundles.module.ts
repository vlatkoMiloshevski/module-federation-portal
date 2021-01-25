import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ROUTES } from './addonBundles.routes';
import { AddonBundlesComponent } from './addonBundles.component';
import { SharedLibModule } from 'shared-lib';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedLibModule,
  ],
  declarations: [
    AddonBundlesComponent
  ]
})
export class AddonBundlesModule { }

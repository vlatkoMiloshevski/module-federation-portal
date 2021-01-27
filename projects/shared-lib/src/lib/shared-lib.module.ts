import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLibComponent } from './auth/auth-lib.component';
import { StoreService } from './custom-redux/store.service';
import { TermsLibComponent } from './terms/terms-lib.component';


@NgModule({
  declarations: [
    AuthLibComponent,
    TermsLibComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    StoreService,
  ],
  exports: [
    AuthLibComponent,
    TermsLibComponent,
  ],
})
export class SharedLibModule { }


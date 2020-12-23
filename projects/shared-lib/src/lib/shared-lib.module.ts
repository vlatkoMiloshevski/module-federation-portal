import { NgModule } from '@angular/core';
import { AuthLibComponent } from './auth/auth-lib.component';
import { TermsLibComponent } from './terms/terms-lib.component';


@NgModule({
  declarations: [
    AuthLibComponent,
    TermsLibComponent,
  ],
  imports: [
  ],
  exports: [
    AuthLibComponent,
    TermsLibComponent,
  ],
})
export class SharedLibModule { }

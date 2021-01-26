import { NgModule } from '@angular/core';
import { AuthLibComponent } from './auth/auth-lib.component';
import { StoreService } from './custom-redux/store.service';
import { TermsLibComponent } from './terms/terms-lib.component';


@NgModule({
  declarations: [
    AuthLibComponent,
    TermsLibComponent,
  ],
  imports: [
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


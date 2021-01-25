import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },


  // Your route here:

  {
    path: 'convictions',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'app1',
        exposedModule: './ConvictionsModule'
      })
        .then(m => m.ConvictionsModule)
  },
  {
    path: 'claims',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'app1',
        exposedModule: './ClaimsModule'
      })
        .then(m => m.ClaimsModule)
  },
  {
    path: 'personalDetails',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'app2',
        exposedModule: './PersonalDetailsModule'
      })
        .then(m => m.PersonalDetailsModule)
  },
  {
    path: 'addonBundles',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'app2',
        exposedModule: './AddonBundlesModule'
      })
        .then(m => m.AddonBundlesModule)
  },

  {
    path: '**',
    component: NotFoundComponent
  }

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.

];


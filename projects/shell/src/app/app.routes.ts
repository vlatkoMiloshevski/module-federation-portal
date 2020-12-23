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
    path: 'flights',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'app1',
        exposedModule: './FlightsModule'
      })
        .then(m => m.FlightsModule)
  },
  {
    path: 'booking',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'app1',
        exposedModule: './BookingModule'
      })
        .then(m => m.BookingModule)
  },
  {
    path: 'city',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'app2',
        exposedModule: './CityModule'
      })
        .then(m => m.CityModule)
  },
  {
    path: 'country',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'app2',
        exposedModule: './CountryModule'
      })
        .then(m => m.CountryModule)
  },

  {
    path: '**',
    component: NotFoundComponent
  }

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.

];


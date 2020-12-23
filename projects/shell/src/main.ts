import { loadRemoteEntry } from '@angular-architects/module-federation';
import { environment } from './environments/environment';

let entries = [];
// ToDo: register local/remote microfrontend apps
if (environment.production) {
    entries.push([
        loadRemoteEntry('https://micofontend-1.web.app/remoteEntry.js', 'app1'),
        loadRemoteEntry('https://microfrontend-2.web.app/remoteEntry.js', 'app2')
    ]);
} else {
    entries = [
        loadRemoteEntry('http://localhost:3000/remoteEntry.js', 'app1'),
        loadRemoteEntry('http://localhost:3100/remoteEntry.js', 'app2')
    ];
}

Promise.all(entries)
    .catch(err => console.error('Error loading remote entries', err))
    .then(() => import('./bootstrap'))
    .catch(err => console.error(err));
